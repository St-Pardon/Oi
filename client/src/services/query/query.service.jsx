import { useQuery, useMutation } from '@tanstack/react-query';
import { Chatlist, Signin, Signup } from '../api/api.service';

export const useSignup = () => {
  return useMutation(Signup);
};

export const useSignin = (onSuccess, onError) => {
  return useMutation(Signin, { networkMode: 'always', onSuccess, onError });
};

export const useChatlist = (username) => {
  return useQuery(['chatlist', username], () => Chatlist(username), {
    networkMode: 'always',
  });
};
