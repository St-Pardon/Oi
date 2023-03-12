import { useQuery, useMutation } from '@tanstack/react-query';
import { Signin, Signup } from '../api/api.service';

export const useSignup = () => {
  return useMutation(Signup);
};

export const useSignin = () => {
  return useMutation(Signin);
};
