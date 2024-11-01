import styled from 'styled-components';
import CategorySec from '../component/CategorySec';
import { Link } from 'react-router-dom';

const Con = styled.div`
    background-color: black;
    color: white;
    font-size: 20px;
    font-weight: 600;
    height: 100vh; 
    width: 100vw; 
    display: flex;
    flex-direction: column;
`;

const Categorys = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 50px;
`


function Category() {
  return (
    <Con>
        카테고리
        <Categorys>
            <Link to="/NowPlaying">
                <CategorySec text={'현재 상영중인'} bgImage={require('../assets/1.jpg')} ></CategorySec>
            </Link>
            <Link to="/Popular">
                <CategorySec text={'인기있는'} bgImage={require('../assets/2.jpg')} ></CategorySec>
            </Link>
            <Link to="/TopRated">
                <CategorySec text={'높은 평가를 받는'} bgImage={require('../assets/3.jpg')} ></CategorySec>
            </Link>
            <Link to="/UpComming">
                <CategorySec text={'개봉 예정중인'} bgImage={require('../assets/4.jpg')} ></CategorySec>
            </Link>
        </Categorys>
    </Con>
  );
}

export default Category;
