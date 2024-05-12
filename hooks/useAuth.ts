import { config } from '@/env/config';
import { getSecureStore } from '@/utils';
import { isAfter, isBefore } from 'date-fns';
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const getAuthToken = () => {
      const token = getSecureStore(config.tokenStoreKey);
      const expiresIn = getSecureStore(config.tokenStoreExpiryKey);
      if (token && expiresIn && isBefore(new Date(), new Date(expiresIn))) {
        setIsAuthenticated(true);
      }
    };
    getAuthToken();
  }, []);

  return isAuthenticated;
};

export default useAuth;
