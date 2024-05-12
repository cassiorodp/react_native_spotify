import { CustomText } from '@/components/CustomText';
import { StyleSheet, View } from 'react-native';
import {
  makeRedirectUri,
  useAuthRequest,
  exchangeCodeAsync,
  TokenResponse,
} from 'expo-auth-session';
import { Button } from '@/components/Button';
import { useEffect } from 'react';
import { secureStore } from '@/utils/';
import { add, fromUnixTime } from 'date-fns';
import { router } from 'expo-router';
import { config, discovery, endpointConfig } from '@/env/config';

export default function Index() {
  const [request, response, promptAsync] = useAuthRequest(
    endpointConfig,
    discovery
  );

  useEffect(() => {
    const saveToken = async () => {
      if (response?.type === 'success') {
        const { code } = response.params;
        const tokenResponse = await exchangeCodeAsync(
          { ...endpointConfig, code },
          discovery
        );

        if (tokenResponse.accessToken) {
          await secureStore(config.tokenStoreKey, tokenResponse.accessToken);

          if (tokenResponse.refreshToken)
            await secureStore(
              config.refreshTokenStoreKey,
              tokenResponse.refreshToken
            );
          await secureStore(
            config.tokenStoreExpiryKey,
            add(fromUnixTime(tokenResponse.issuedAt), {
              seconds: tokenResponse.expiresIn,
            }).toISOString()
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
