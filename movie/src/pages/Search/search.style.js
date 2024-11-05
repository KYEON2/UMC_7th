import styled from "styled-components";

const PageCon = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100vh;
`;

const SearchContainer = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 20px; 
    margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 15px;
  flex: 1;
  height: 35px;
  box-sizing: border-box;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: none;
`;

const Button = styled.button`
  width: 50px;
  height: 35px;
  box-sizing: border-box;
  background-color: #FA0049;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border: none;
`;

const MovieGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(118px, 1fr)); 
  width: 90%;
  gap: 10px 20px;
  padding: 0; /* 여백을 없애기 위해 패딩 제거 */
  margin-top: 20px;
`;

export { PageCon, SearchContainer, Input, Button, MovieGridContainer };
