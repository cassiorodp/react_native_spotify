import axiosInstance from './client';

export const getUserData = async () => {
  const data = await axiosInstance.get('/v1/me');
  return data;
};
