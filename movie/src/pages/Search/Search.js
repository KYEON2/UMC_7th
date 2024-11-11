import { useState } from 'react';
import * as S from './search.style'
import { useNavigate, useSearchParams } from 'react-router-dom';
import useCustomFetch from '../../hooks/useCustomFetch';
import Card from '../../component/Card';
import SearchMovielist from '../../component/Search_movie_list';


const SearchPage = () => {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();
    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value)
    }
    const [searchParams, setSearchParams] = useSearchParams({
        mq: ''
    });

    const mq = searchParams.get('mq');
    

    const handleSearchMovie = () => {
        if (mq === searchValue) return;
        navigate(`/search?mq=${searchValue}`);
    }

    const handleSearchMovieWithKeyboard = (e) => {
        if(e.key === 'Enter') {
            handleSearchMovie();
        }
    }
    const url = `/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`

    const {data: movies, isLoading, isError} = useCustomFetch(url);

   

    return (
        <S.PageCon>
            <S.SearchContainer>
                <S.Input placeholder=" 영화 제목을 입력해주세요 ... " value={searchValue} onChange={onChangeSearchValue}
                onKeyDown={handleSearchMovieWithKeyboard}></S.Input>
                <S.Button onClick={handleSearchMovie}>검색</S.Button>
            </S.SearchContainer>
            <SearchMovielist/>
            
        </S.PageCon>
    );
};

export default SearchPage;