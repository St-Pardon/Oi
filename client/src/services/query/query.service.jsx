import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  ChangeChatRequest,
  Chatlist,
  GetChatRequest,
  GetUserById,
  GetUserByUsername,
  SendChatRequest,
  Signin,
  Signup,
} from '../api/api.service';

export const useSignup = (onSuccess, onError) => {
  return useMutation(Signup, { networkMode: 'always', onSuccess, onError });
};

export const useSignin = (onSuccess, onError) => {
  return useMutation(Signin, { networkMode: 'always', onSuccess, onError });
};

export const useGetUser = (id) => {
  return useQuery(['user', id], () => GetUserById(id), {
    networkMode: 'always',
  });
};

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

// QueryProvider
export const useGetFetchQuery = (key) => {
  const queryClient = useQueryClient();

  return queryClient.getQueryData([key]);
};
