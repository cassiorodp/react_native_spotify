import { config as envConfig } from '@/env/config';
import { getSecureStore } from '@/utils';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: envConfig.baseUrl,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = getSecureStore(envConfig.tokenStoreKey);
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
