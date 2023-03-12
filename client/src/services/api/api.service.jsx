import axios from 'axios';

const BaseURI = 'http://127.0.0.1:5230';

/**
 * Create a new user
 * @param {*} data
 * @returns network response
 */
export const Signup = (data) => {
  console.log("clicked", data)
  return axios.post(`${BaseURI}/signup`, data);
};

export const Signin = (data) => {
  console.log("clicked", data)
  return axios.post(`${BaseURI}/signin`, data);
};
