import { useSearchParams } from 'react-router-dom';
import * as S from '../pages/Search/search.style'
import Card from './Card';
import useCustomFetch from '../hooks/useCustomFetch';


const SearchMovielist = () => {

    const [searchParams] = useSearchParams();

    const mq = searchParams.get('mq');
    const url = `/search/movie?query=${mq}&include_adult=false&language=en-US&page=1`

    const {data: movies, isLoading, isError} = useCustomFetch(url);

    return (
        <S.MovieGridContainer>
            {movies?.results?.map((movie, i) => (
                <Card key={i} movie={movie} />
            ))}
        </S.MovieGridContainer>
    );
};

export default SearchMovielist;