import styled from "styled-components";

const MovieForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 120px;
  height: 210px;
  margin-bottom : 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #000;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const MovieImg = styled.img`
  width: 120px;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
`;

const MovieExplain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  text-align: center;
  color: white;
`;

const MovieTitle = styled.div`
  margin: 1px 0;
  font-size: 10px;
  font-weight: bold;
  color: white;
`;

const MovieDate = styled.div`
  font-size: 8px;
  color: #bbb;
`;

export default function MovieSection({ original_title, poster_path, release_date }) {
  return (
    <MovieForm>
      <div>
        <MovieImg
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={original_title}
        />
        <MovieExplain>
          <MovieTitle>{original_title}</MovieTitle>
          <MovieDate>{release_date}</MovieDate>
        </MovieExplain>
      </div>
    </MovieForm>
  );
}
