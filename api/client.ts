import { config as envConfig, endpointConfig, discovery } from '@/env/config';
import { getSecureStore, storeToken } from '@/utils';
import axios from 'axios';
import { isAfter } from 'date-fns';
import { refreshAsync } from 'expo-auth-session';

const axiosInstance = axios.create({
  baseURL: envConfig.baseUrl,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = getSecureStore(envConfig.tokenStoreKey);
    const refreshToken = getSecureStore(envConfig.refreshTokenStoreKey);
    const expiresIn = getSecureStore(envConfig.tokenStoreExpiryKey);
    if (refreshToken && expiresIn && isAfter(new Date(), new Date(expiresIn))) {
      const response = await refreshAsync(
        {
          ...endpointConfig,
          refreshToken,
        },
        discovery
      );
      await storeToken(response);
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
