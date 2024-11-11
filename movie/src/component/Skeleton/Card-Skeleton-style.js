import styled, {keyframes} from "styled-components";

const Skeleton = keyframes`
    0% {
        opacity: 1;
    }
    30% {
        opacity: 0.7;
    }
    50% {
        opacity: 0.4;
    }
    80% {
        opacity: 0.8;
    }
    100% {
        opacity: 1;
    }
`

const Container = styled.div`
    display : flex;
    flex-direction : column;
    justify-content: flex-start;
`
const CardMain = styled.div `
    width :120px;
    height: 210px;
    background: rgb(230, 230, 230);
    border-radius: 8px;
    overflow: hidden;
    animation: ${Skeleton} 3s 1s infinite linear alternate;
`
const TextWrapper = styled.div`
    width :120px;
    height: 46px;
    display:flex;
    flex-direction: column;

`

const TitleBox = styled.div`
    background: rgb(230, 230, 230);

`

const DesriptionBox = styled.div`
    background: rgb(230, 230, 230);

`
export {Container, CardMain, TextWrapper, TitleBox, DesriptionBox}