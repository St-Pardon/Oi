import axios from 'axios';

const BaseURI = 'http://127.0.0.1:5230/api/v1';

/**
 * Create a new user
 * @param {*} data
 * @returns network response
 */
export const Signup = (data) => {
  return axios.post(`${BaseURI}/auth/signup`, data);
};

export const Signin = (data) => {
  return axios.post(`${BaseURI}/auth/signin`, data);
};

export const Chatlist = (userId) => {
  return axios.get(`${BaseURI}/chatlist/${userId}`).then((res) => res.data);
};

export const GetUserById = (id) => {
  return axios.get(`${BaseURI}/user/${id}`).then((res) => res.data);
};

export const GetUserByUsername = (username) => {
  return axios
    .get(`${BaseURI}/user/username/${username}`)
    .then((res) => res.data);
};

export const GetChatRequest = (userId) => {
  return axios.get(`${BaseURI}/request/${userId}`).then((res) => res.data);
};

export const SendChatRequest = ({ userId, request_id }) => {
  return axios
    .put(`${BaseURI}/request/${userId}`, { request_id })
    .then((res) => res.data);
};

export const ChangeChatRequest = ({ userId, request_id, status }) => {
  return axios
    .patch(
      `${BaseURI}/request/${userId}?request_id=${request_id}&status=${status}`
    )
    .then((res) => res.data);
};

export const EditUser = (data) => {
  return axios.patch(`${BaseURI}/user/${userId}/edit`, data).then((res) => res.data);
};
