import axiosInstance from './client';

export const getUserData = async () => {
  const data = await axiosInstance.get('/me');
  return data;
};

export const getArtistsData = async ({
  limit = 10,
  page,
}: {
  limit?: number;
  page: number;
}) => {
  const data = await axiosInstance.get('/me/top/artists', {
    params: {
      limit,
      offset: page * limit,
    },
  });
  return data;
};
