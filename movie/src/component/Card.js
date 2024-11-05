import React from 'react';
import { useNavigate } from 'react-router-dom';
import MovieSection from '../component/movieSection';

export default function Card({ movie }) {
  const navigate = useNavigate();

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <div onClick={() => handleMovieClick(movie.id)}>
      <MovieSection {...movie} />
    </div>
  );
}