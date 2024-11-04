import styled from 'styled-components';

const Con = styled.div`
    background-color: black;
    color: white;
    height: 100vh; 
    width: 100vw; 
    display: flex;
    justify-content: center;
`;

const Input = styled.input`
  width: 300px;
  height: 35px;
  box-sizing: border-box;
  margin: 5px 0px;
  border-radius: 4px;
  border: 0px;
`;

const Button = styled.button`
  width: 50px;
  height: 35px;
  box-sizing: border-box;
  background-color: #FA0049;
  border-radius: 4px;
  margin: 5px 0px;
  border: 0px;
`;

function Search() {
  return (
    <Con>
      <Input placeholder=" 영화 제목을 입력하세요"></Input>
      <Button>검색</Button>
    </Con>
  );
}

export default Search;
