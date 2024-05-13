import '@testing-library/react-native/extend-expect';

jest.mock('expo-auth-session', () => ({
  makeRedirectUri: jest.fn(),
}));
