import MovieSection from "./component/movieSection";
import { movies } from "./API/movieLists";
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