import styled from 'styled-components';
import MovieSection from "../component/movieSection";
import {useState, useEffect} from "react";
import axios from "axios";
import '../App.css';

const Con = styled.div`
    background-color: black;
    color: white;
    height: 100%; 
    width: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
`;

function UpComming() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getMovies = async () => {
        const movies = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9`,
            }
        })
        setMovies(movies);
    }
    getMovies()
  }, []);

  return (
    <Con>
      <div className="movie-container">
        {movies.data?.results.map((movie, i) => {
          return <MovieSection key={i} {...movie} />;
        })}
      </div>
    </Con>
  );
}

export default UpComming;
