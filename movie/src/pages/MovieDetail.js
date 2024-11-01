import styled from 'styled-components';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from '../apis/axios-instance';
import ActorSection from "../component/ActorSec";

const Con = styled.div`
    background-color: black;
    color: white;
    height: auto; 
    width: 100vw; 
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
`;

const BackgroundCon = styled.div`
    height: 300px;
    width: 100vw;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
    background-image: ${({ posterUrl }) =>
        posterUrl ? `url(${posterUrl})` : 'none'};
    background-color: ${({ posterUrl }) =>
        posterUrl ? 'transparent' : 'rgba(50, 50, 50, 0.7)'};
    margin-bottom: 30px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    margin-top: 10px;
    border-radius: 8px;
    width: 85%;
`;

const ActorCon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
`;

const MovieTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: white;
`;

const MovieDate = styled.div`
  font-size: 17px;
  color: #bbb;
`;

const MovieTag = styled.div`
  font-size: 23px;
  color: #bbb;
`;

const MovieEx = styled.div`
  font-size: 17px;
  color: #bbb;
`;

function MovieDetail() {
    const { movie_id } = useParams(); 
    const [credits, setCredits] = useState(null);
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        const getCredits = async () => {
            try {
                const response = await axiosInstance.get(`/movie/${movie_id}/credits?language=en-US`);
                setCredits(response.data);
            } catch (error) {
                console.error("Error fetching credits:", error);
            }
        };

        const getMovieDetails = async () => {
            try {
                const response = await axiosInstance.get(`/movie/${movie_id}?language=en-US`);
                setMovieDetails(response.data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        getCredits();
        getMovieDetails();
    }, [movie_id]);

    const posterUrl = movieDetails ? `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}` : '';

    return (
        <Con>
            <BackgroundCon posterUrl={posterUrl}>
                {movieDetails && (
                    <ContentWrapper>
                        <MovieTitle>{movieDetails.original_title}</MovieTitle>
                        <MovieDate>{movieDetails.release_date}</MovieDate>
                        <MovieDate>{movieDetails.runtime} minutes</MovieDate>
                        <MovieDate>⭐️ {movieDetails.vote_average}</MovieDate>
                        <br /> 
                        <MovieTag>{movieDetails.tagline}</MovieTag>
                        <br /> 
                        <MovieEx>{movieDetails.overview}</MovieEx>
                    </ContentWrapper>
                )}
            </BackgroundCon>
            <ActorCon>
                {credits?.cast.map((actor, i) => (
                    <div key={i}>
                        <ActorSection {...actor} />
                    </div>
                ))}
            </ActorCon>
        </Con>
    );
}

export default MovieDetail;
