import {useState} from 'react';
import SearchMovie from './component/search';
import ListMovie from './component/listMovie';
import PaginationMovies from './component/pagination';
import {apiMovie} from './services/api';
import {helpers} from './helpers/common';

const AppMovie =()=>{
    const [loading, setloading] = useState(false);
    const [dataMovie, setDataMovie ] = useState({});
    const [page, setPage] = useState(1);
    const [keyword, setKeyword] = useState("");
    const [totalItems, setTotalItems] = useState(0); 

    const searchFilm = async(movieName='',p=1)=>{
        setloading(true);
        setKeyword(movieName);
        setPage(p);
        const data = await apiMovie.searchMoviebyName(movieName,p);

        if(!helpers.isEmptyObject(data)){
            if(data.hasOwnProperty('results')){
                setDataMovie(data.results);
                setTotalItems(data.total_results);
            }
        }
        setloading(false);
    }
    return(
        <>
            <SearchMovie
                loading={loading}
                search={searchFilm}
            />
            {   !loading 
                && !helpers.isEmptyObject(dataMovie) 
                && <ListMovie dataMovie={dataMovie}/>
            }
            {   !loading 
                && !helpers.isEmptyObject(dataMovie) 
                && <PaginationMovies 
                        search={searchFilm}
                        name={keyword}
                        current={page}
                        pageSize={20}
                        total={totalItems}
                    />
            }
        </>
    )
}
export default AppMovie;