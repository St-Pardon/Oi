import { useQuery, useMutation } from '@tanstack/react-query';
import { Chatlist, GetUser, Signin, Signup } from '../api/api.service';

export const useSignup = (onSuccess, onError) => {
  return useMutation(Signup, { networkMode: 'always', onSuccess, onError });
};

export const useSignin = (onSuccess, onError) => {
  return useMutation(Signin, { networkMode: 'always', onSuccess, onError });
};

export const useGetUser = () => {
  return useQuery(['user'], GetUser, {
    networkMode: 'always',
  });
};

export const useChatlist = (username) => {
  return useQuery(['chatlist', username], () => Chatlist(username), {
    networkMode: 'always',
  });
};
