import { useQuery, useMutation } from '@tanstack/react-query';
import { createUser } from '../api/api.service';

export const useCreateUser = () => {
  return useMutation(createUser);
};
