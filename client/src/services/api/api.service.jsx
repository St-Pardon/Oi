import axios from 'axios';

const BaseURI = 'https://oi-n1ic.onrender.com/api/v1';
const Headers = { Authentication: `Bearer ${localStorage.getItem('token')}` };

/**
 * Create a new user
 * @param {object} data
 * @returns network response
 */
export const Signup = (data) => {
  return axios.post(`${BaseURI}/auth/signup`, data);
};

/**
 * Signs in a user
 * @param {object} data
 * @returns network response
 */
export const Signin = (data) => {
  return axios.post(`${BaseURI}/auth/signin`, data);
};

/**
 * Get a user's chatlist
 * @param {string} userId -
 * @returns requests data
 */
export const Chatlist = (userId) => {
  return axios.get(`${BaseURI}/chatlist/${userId}`).then((res) => {
    return res.data;
  });
};

/**
 * Retrieves a single user by id
 * @param {string} id
 * @returns requested data
 */
export const GetUserById = (id) => {
  return axios.get(`${BaseURI}/user/${id}`).then((res) => res.data);
};

/**
 * retrieves a user by name, username or email
 * @param {string} username
 * @returns reqested data
 */
export const GetUserByUsername = (username) => {
  return axios
    .get(`${BaseURI}/user/username/${username}`)
    .then((res) => res.data);
};

/**
 * get chat request from the user
 * @param {string} userId
 * @returns requested data
 */
export const GetChatRequest = (userId) => {
  return axios.get(`${BaseURI}/request/${userId}`).then((res) => res.data);
};

/**
 * send a chat request to a user
 * @param {{string, string}} param0
 * @returns requested data
 */
export const SendChatRequest = ({ request_id, sender_id }) => {
  return axios
    .put(`${BaseURI}/request/${sender_id}`, { request_id })
    .then((res) => res.data);
};

/**
 * confirm, reject, or cancel chat request
 * @param {{string, string, string}} param0
 * @returns  requested data
 */
export const ChangeChatRequest = ({ sender_id, request_id, status }) => {
  return axios
    .patch(
      `${BaseURI}/request/${sender_id}?request_id=${request_id}&status=${status}`
    )
    .then((res) => res.data);
};

/**
 * edit user's information
 * @param {*} data
 * @returns network response
 */
export const EditUser = (data) => {
  return axios
    .patch(`${BaseURI}/user/${localStorage.getItem('userId')}/edit`, data)
    .then((res) => res.data);
};
