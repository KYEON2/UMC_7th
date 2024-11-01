import styled from 'styled-components';

const Con = styled.div`
    background-color: black;
    color: white;
    height: 100vh; 
    width: 100vw; 
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Home() {
  return (
    <Con>
      Home
    </Con>
  );
}

export default Home;
