import styled from 'styled-components';
import '../App.css';
import useCustomFetch from '../hooks/useCustomFetch';
import Card from '../component/Card';
import * as S from '../pages/Search/search.style'

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

  const {data:movies, isLoading, isError} = useCustomFetch(`/movie/upcoming?language=ko-KR&page=1`)

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

  return (
    <Con>
      <S.MovieGridContainer>
            {movies?.results?.map((movie, i) => (
                <Card key={i} movie={movie} />
            ))}
      </S.MovieGridContainer>
    </Con>
  );
}

export default UpComming;
