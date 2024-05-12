import { CustomText } from '@/components/CustomText';
import { StyleSheet, View } from 'react-native';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button } from '@/components/Button';
import { useEffect } from 'react';
import { secureStore } from '@/utils/';
import { add } from 'date-fns';
import { router } from 'expo-router';
import { config } from '@/env/config';

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export default function Index() {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '1c9d0c607a51456895dd09cd729c7212',
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
    },
    discovery
  );

  useEffect(() => {
    const saveToken = async () => {
      if (response?.type === 'success') {
        const { code } = response.params;
        if (code) {
          await secureStore(config.tokenStoreKey, code);
          await secureStore(
            config.tokenStoreExpiryKey,
            add(new Date(), { hours: 1 }).toISOString()
          );
          router.navigate('(tabs)');
        }
      }
    };

    saveToken();
  }, [response]);

  return (
    <View style={styles.container}>
      <CustomText>Entre com sua conta Spotify</CustomText>
      <Button
        disabled={!request}
        onPress={() => promptAsync()}
        title="Entrar"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
