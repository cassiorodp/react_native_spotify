import { makeRedirectUri } from 'expo-auth-session';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const config = {
  tokenStoreKey: 'access_token',
  tokenStoreExpiryKey: 'expires_in',
  refreshTokenStoreKey: 'refresh_token',
  baseUrl: 'https://api.spotify.com',
  clientId: '16094f2f37d2423980cd818cebdf281b',
  clientSecret: process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_SECRET,
};

export const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export const endpointConfig = {
  clientId: config.clientId,
  clientSecret: config.clientSecret,
  scopes: [
    'user-read-email',
    'user-library-read',
    'user-read-recently-played',
    'user-top-read',
    'playlist-read-private',
    'playlist-read-collaborative',
    'playlist-modify-public',
  ],
  usePKCE: false,
  redirectUri: makeRedirectUri({
    scheme: 'reactspotify',
  }),
};

export const routeTags = {
  user: 'user',
  artists: 'artists',
};

export const spacing = {
  xs: width * 0.01,
  sm: width * 0.02,
  md: width * 0.03,
  lg: width * 0.04,
  xl: width * 0.05,
};
