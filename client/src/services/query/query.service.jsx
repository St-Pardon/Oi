import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  ChangeChatRequest,
  Chatlist,
  EditUser,
  GetChatRequest,
  GetUserById,
  GetUserByUsername,
  SendChatRequest,
  Signin,
  Signup,
} from '../api/api.service';

/**
 * useSignup hook - handles user creation
 * @param {CallableFunction} onSuccess - callback function to handle success
 * @param {CallableFunction} onError - callback function to handle failures
 * @returns - return data
 */
export const useSignup = (onSuccess, onError) => {
  return useMutation(Signup, { networkMode: 'always', onSuccess, onError });
};

/**
 * useSignin hook - handles user authentications
 * @param {CallableFunction} onSuccess - callback function to handle success
 * @param {CallableFunction} onError - callback function to handle failures
 * @returns - return data
 */
export const useSignin = (onSuccess, onError) => {
  return useMutation(Signin, { networkMode: 'always', onSuccess, onError });
};

/**
 * useGetUser hook - handles user info retrival
 * @param {string} id-
 * @returns - return data
 */
export const useGetUser = (id) => {
  return useQuery(['user', id], () => GetUserById(id), {
    networkMode: 'always',
  });
};

/**
 *
 * @param {string} username
 * @returns
 */
export const useChatlist = (username) => {
  return useQuery(['chatlist'], () => Chatlist(username), {
    networkMode: 'always',
  });
};

export const useGetUserByUsername = () => {
  return useMutation(GetUserByUsername, { networkMode: 'always' });
};

export const useChatRequest = (userId) => {
  return useQuery(['request'], () => GetChatRequest(userId), {
    networkMode: 'always',
  });
};

export const useSendChatRequest = (onSuccess, onError) => {
  return useMutation(SendChatRequest, {
    networkMode: 'always',
    onSuccess,
    onError,
  });
};

export const useChangeChatRequest = (onSuccess, onError) => {
  return useMutation(ChangeChatRequest, {
    networkMode: 'always',
    onSuccess,
    onError,
  });
};

export const useEditUserProfile = (onSuccess, onError) => {
  return useMutation(EditUser, {
    networkMode: 'always',
    onSuccess,
    onError,
  });
};

// QueryProvider
export const useGetFetchQuery = (key) => {
  const queryClient = useQueryClient();

  return queryClient.getQueryData([key]);
};
