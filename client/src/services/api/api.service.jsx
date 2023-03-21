import axios from 'axios';

const BaseURI = 'http://127.0.0.1:5230';

/**
 * Create a new user
 * @param {*} data
 * @returns network response
 */
export const Signup = (data) => {
  return axios.post(`${BaseURI}/signup`, data);
};

export const Signin = (data) => {
  return axios.post(`${BaseURI}/signin`, data);
};

export const Chatlist = () => {
  return axios
    .get(`${BaseURI}/chatlist/${localStorage.getItem('userId')}`)
    .then((res) => res.data);
};

export const GetUserById = (id) => {
  return axios.get(`${BaseURI}/user/${id}`).then((res) => res.data);
};

export const GetUserByUsername = (username) => {
  return axios.get(`${BaseURI}/username/${username}`).then((res) => res.data);
};
