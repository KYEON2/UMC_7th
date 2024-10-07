import styled from "styled-components";

const CateCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 210px;  
  height: 110px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-size: contain;
  background-position: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #000; 
  position: relative; 

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`

const Label = styled.div`
  position: absolute; 
  bottom: 5px; 
  left: 5px; 
  background-color: rgba(0, 0, 0, 0.7); 
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
`

export default function CategorySec({text, bgImage}) {
    return(
        <CateCon bgImage={bgImage}> 
            <Label>{text}</Label>
        </CateCon>
    )
}
