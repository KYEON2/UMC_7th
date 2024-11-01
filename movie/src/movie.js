import MovieSection from "./component/movieSection";
import { movies } from "./mocks/movies";
import './App.css';

export default function Movie() {
  return (
    <div className="movie-container">
      {movies.results.map((movie, i) => {
        return <MovieSection key={i} {...movie} />;
      })}
    </div>
  );
}