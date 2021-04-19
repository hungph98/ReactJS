import jwt from 'jsonwebtoken';

const TOKEN_KEY = 'reactjs2012';
const saveToken = (token = null) => {
  // save localStorage
  if(token !== null || token !== ''){
    localStorage.setItem('token_login', token);
  }
}



const removeToken = () => {
  localStorage.removeItem('token_login');
}

const getTokenLocalStorage = () => {
  let token = localStorage.getItem('token_login');
  return token;
}

const decryptTokenLocalStorage = () => {
  // giai ma toke local storage
  let token = getTokenLocalStorage();
  let decryptToken = null;
  if(token != null && token !== ''){
    decryptToken = jwt.verify(token, TOKEN_KEY);
    if(decryptToken !== null && decryptToken !== ''){
      return decryptToken;
    }
    return null;
  }
  return decryptToken;
}

// check ng dung da dang nhap chua
const isAuthenticated = () => {
  let token = decryptTokenLocalStorage();
  if(token !== null && token !== ''){
    return true;
  }
  return false;
}
const isEmptyObject = (obj) => {
  for(let prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return JSON.stringify(obj) === JSON.stringify({});
}

const checkTrailerVideo = (videos = {}) => {
  let check = false;
  if(videos.hasOwnProperty('results')){
    if(videos.results.length > 0){
      check = true;
    }
  }
  return check;
}

export const helper = {
  isEmptyObject,
  saveToken,
  decryptTokenLocalStorage,
  removeToken,
  isAuthenticated,
  checkTrailerVideo
}