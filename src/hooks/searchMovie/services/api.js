import axios from 'axios';

const searchMoviebyName = async(movieName ='', page = 1)=>{
    const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=cfe422613b250f702980a3bbf9e90716&page=${page}`;
    const respons = await axios.get(url);
    const result = respons.status === 200 ? respons.data: {};
    return result;
}

export const apiMovie = {
    searchMoviebyName
}