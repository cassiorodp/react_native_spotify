import axiosInstance from './client';
import * as Network from 'expo-network';
import { getDataFromLocal, saveDataToLocal } from './storage';
import { routeTags } from '@/constants/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const fetchDataWithCache = async ({
  routeTag,
  fetchData,
  page,
  limit,
}: {
  routeTag: string;
  fetchData: (params: { page: number; limit: number }) => Promise<any>;
  page: number;
  limit: number;
}) => {
  const state = await Network.getNetworkStateAsync();
  if (!state.isConnected) {
    const cachedData = await getDataFromLocal(`${routeTag}-${page}`);
    if (cachedData) {
      return cachedData;
    }

    return {
      data: {
        items: [],
      },
    };
  }
  const data = await fetchData({ page, limit });
  await saveDataToLocal(`${routeTag}-${page}`, data);
  return data;
};

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
  const data = await fetchDataWithCache({
    routeTag: routeTags.artists,
    fetchData: ({ page, limit }) =>
      axiosInstance.get('/me/top/artists', {
        params: {
          limit,
          offset: page * limit,
        },
      }),
    page,
    limit,
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
  const data = await fetchDataWithCache({
    routeTag: `${routeTags.albuns}-${id}`,
    fetchData: ({ page, limit }) =>
      axiosInstance.get(`/artists/${id}/albums`, {
        params: {
          limit,
          offset: page * limit,
        },
      }),
    page,
    limit,
  });
  return data;
};

export const getUserPlaylists = async ({
  limit = 10,
  page,
}: {
  limit?: number;
  page: number;
}) => {
  const data = await fetchDataWithCache({
    routeTag: routeTags.playlists,
    fetchData: ({ page, limit }) =>
      axiosInstance.get('/me/playlists', {
        params: {
          limit,
          offset: page * limit,
        },
      }),
    page,
    limit,
  });
  return data;
};

export const postPlaylist = async (payload: { name: string }) => {
  const userData = await getUserData();

  try {
    const data = await axiosInstance.post(
      `/users/${userData.data.id}/playlists`,
      {
        name: payload.name,
      }
    );
    return data;
  } catch (error) {}
};
