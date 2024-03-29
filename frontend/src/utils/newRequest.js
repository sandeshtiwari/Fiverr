import axios from 'axios';

const newRequest = axios.create({
  baseURL: 'http://localhost:8800/api/',
  withCredentials: true,
});

if (localStorage.getItem("currentUser")) {
  newRequest.defaults.headers.common["token"] = JSON.parse(
    localStorage.getItem("currentUser")
  ).token;
}



export default newRequest;
