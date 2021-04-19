import jwt from 'jsonwebtoken';
import axios from 'axios';

const TOKEN_KEY = 'reactjs2012';

const getDataComingMovie = async (fdate, tdate, page = 1 ) =>{
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&release_date.gte=${fdate}&release_date.lte=${tdate}&with_release_type=3&fbclid=IwAR1Sk_MVJC_HadOssOC9tt4vAYbmxt6XOY102mdOHj0jK8Rk2hV9krYzQ9g`;
  const response = await axios.get(url);
  const result = response.status === 200  ? response.data : {};
  return result; 
}

const loginUser = (user, pass) => {
  let token = null;
  if(user === 'admin' && pass === '123'){
    token = jwt.sign({
      id: 1,
      username: user,
      email: "admin@gmail.com",
      phone: "09871223",
      address: "Ha No" 
    }, TOKEN_KEY);
    
    return token;
  }
  return token;
}

const getDataMovieById = async(id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&&language=en-US&append_to_response=videos%2Cimages&include_image_language=en%2Cnull&fbclid=IwAR0u0fRxutIBaEZBZjayRTngx65pgk4olgDWOarWlmuq-A7wa9Nm6dRvOJg`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
}

export const api = {
  loginUser,
  getDataComingMovie,
  getDataMovieById
}