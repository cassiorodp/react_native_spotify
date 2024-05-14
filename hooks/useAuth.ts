import { config } from '@/constants/config';
import { getSecureStore } from '@/utils';
import { isAfter } from 'date-fns';
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const getAuthToken = () => {
      const token = getSecureStore(config.tokenStoreKey);
      const expiresIn = getSecureStore(config.tokenStoreExpiryKey);
      if (!token || (expiresIn && isAfter(new Date(), new Date(expiresIn)))) {
        setIsAuthenticated(false);
      }
    };
    getAuthToken();
  }, []);

  return isAuthenticated;
};

export default useAuth;
