import axios from 'axios';

const BaseURI = 'http://127.0.0.1:5230';

/**
 * Create a new user
 * @param {*} data
 * @returns network response
 */
export const createUser = (data) => {
  return axios.post(`${BaseURI}/signup`, data);
};
