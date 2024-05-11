import * as SecureStore from 'expo-secure-store';

const secureStore = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

const getSecureStore = async (key: string) => {
  return await SecureStore.getItemAsync(key);
};

export { secureStore, getSecureStore };
