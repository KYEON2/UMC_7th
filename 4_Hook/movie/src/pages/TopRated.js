import styled from 'styled-components';
import MovieSection from "../component/movieSection";
import {useNavigate} from "react-router-dom";
import '../App.css';
import useCustomFetch from '../hooks/useCustomFetch';

const Con = styled.div`
    background-color: black;
    color: white;
    height: 100%; 
    width: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
`;

function TopRated() {

  const {data:movies, isLoading, isError} = useCustomFetch(`/movie/top_rated?language=ko-KR&page=1`)
  const navigate = useNavigate();

  if (isLoading) {
    return <div>
      <h1 style={{color :'white'}}>로딩중...</h1>
    </div>
  }

  if (isError) {
    return <div>
      <h1 style={{color :'white'}}>ERROR</h1>
    </div>
  }

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <Con>
      <div className="movie-container">
        {movies?.results?.map((movie, i) => {
          return (
            <div key={i} onClick={() => handleMovieClick(movie.id)}>
              <MovieSection {...movie} />
            </div>
          );
        })}
      </div>
    </Con>
  );
}

export default TopRated;
