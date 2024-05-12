import * as SecureStore from 'expo-secure-store';

const secureStore = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

const getSecureStore = (key: string) => {
  return SecureStore.getItem(key);
};

export { secureStore, getSecureStore };
