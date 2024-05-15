import '@testing-library/react-native/extend-expect';

jest.mock('expo-auth-session', () => ({
  makeRedirectUri: jest.fn(),
}));

jest.mock('@react-native-async-storage/async-storage', () => {
  return {
    setItem: jest.fn(),
    getItem: jest.fn(),
  };
});
