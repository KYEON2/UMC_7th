import styled from "styled-components";

const ActForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 120px;
  height: 210px;
  margin-bottom: 10px;
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

const ActImg = styled.img`
  width: 120px;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
`;

const EmptyImg = styled.div`
  width: 120px;
  height: 160px;
  background-color: #333;
  border-radius: 8px;
`;

const ActExplain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  text-align: center;
  color: white;
`;

const ActName = styled.div`
  margin: 1px 0;
  font-size: 10px;
  font-weight: bold;
  color: white;
`;

const Character = styled.div`
  font-size: 8px;
  color: #bbb;
`;

export default function ActorSec({ original_name, character, profile_path }) {
  const imageUrl = profile_path
    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
    : null;

  return (
    <ActForm>
      <div>
        {imageUrl ? (
          <ActImg src={imageUrl} alt={original_name} />
        ) : (
          <EmptyImg />  // 사진이 없을 때 검정색 배경 표시
        )}
        <ActExplain>
          <ActName>{original_name}</ActName>
          <Character>{character}</Character>
        </ActExplain>
      </div>
    </ActForm>
  );
}
