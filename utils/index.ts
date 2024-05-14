import { config } from '@/constants/config';
import { add, fromUnixTime } from 'date-fns';
import { TokenResponse } from 'expo-auth-session';
import * as SecureStore from 'expo-secure-store';

const secureStore = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

const getSecureStore = (key: string) => {
  return SecureStore.getItem(key);
};

const clearSecureStore = async () => {
  await SecureStore.deleteItemAsync(config.tokenStoreKey);
  await SecureStore.deleteItemAsync(config.refreshTokenStoreKey);
  await SecureStore.deleteItemAsync(config.tokenStoreExpiryKey);
};

const storeToken = async (tokenResponse: TokenResponse) => {
  await secureStore(config.tokenStoreKey, tokenResponse.accessToken);

  if (tokenResponse.refreshToken)
    await secureStore(config.refreshTokenStoreKey, tokenResponse.refreshToken);
  await secureStore(
    config.tokenStoreExpiryKey,
    add(fromUnixTime(tokenResponse.issuedAt), {
      seconds: tokenResponse.expiresIn,
    }).toISOString()
  );
};

export { secureStore, getSecureStore, clearSecureStore, storeToken };
