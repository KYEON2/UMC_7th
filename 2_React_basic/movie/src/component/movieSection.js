import { useState } from "react";

export default function MovieSection({
  original_title,
  poster_path,
  vote_average,
  overview,
}) {
  const [isMouse, setIsMouse] = useState(false);
  const onMouse = () => {
    setIsMouse((prev) => (prev = !prev));
  };
  return (
    <div
        className="movieForm"
        onMouseEnter={onMouse}
        onMouseLeave={onMouse}
    >
      <div> 
        {isMouse ? (
          <div className="over-view">
            {overview}
          </div>
        ) : null}
        <img
          className="movie-img"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        />
      </div>
      <div className="movie-explain">
        <div>{original_title}</div>
        <div>⭐{vote_average}</div>
      </div>
    </div>
  );
}