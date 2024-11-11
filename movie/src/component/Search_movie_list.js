import { useSearchParams } from 'react-router-dom';
import * as S from '../pages/Search/search.style'
import Card from './Card';
import useCustomFetch from '../hooks/useCustomFetch';
import CardListSkeleton from './Skeleton/Card-List-Skeleton';


const SearchMovielist = () => {

    const [searchParams] = useSearchParams();

    const mq = searchParams.get('mq');
    const url = `/search/movie?query=${mq}&include_adult=false&language=en-US&page=1`
    const {data: movies, isLoading, isError} = useCustomFetch(url);

    if (isError) {
        return (
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <h1 style={{ color: 'white' }}>오류 발생</h1>
            </div>
        );
    }

    if (!isLoading) {
        return (
            <S.MovieGridContainer>
                <CardListSkeleton/>
            </S.MovieGridContainer>
        )
    }

    if (mq && movies?.results?.length === 0) {
        return (
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <h1 style={{ color: 'white' }}>해당하는 검색어 {mq}에</h1>
                <h1 style={{ color: 'white' }}>해당하는 검색어가 없습니다</h1>
            </div>
        );
    }

    return (
        <S.MovieGridContainer>
            {movies?.results?.map((movie, i) => (
                <Card key={i} movie={movie} />
            ))}
        </S.MovieGridContainer>
    );
};

export default SearchMovielist;