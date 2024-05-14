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

export const getArtistAlbunsData = async ({
  limit = 10,
  page,
  id,
}: {
  limit?: number;
  page: number;
  id: string;
}) => {
  const data = await axiosInstance.get(`/artists/${id}/albums`, {
    params: {
      limit,
      offset: page * limit,
    },
  });
  return data;
};
