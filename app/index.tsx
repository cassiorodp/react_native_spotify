import { CustomText } from '@/components/CustomText';
import { StyleSheet, View } from 'react-native';
import { useAuthRequest, exchangeCodeAsync } from 'expo-auth-session';
import { Button } from '@/components/Button';
import { useEffect } from 'react';
import { storeToken } from '@/utils/';
import { router } from 'expo-router';
import { discovery, endpointConfig } from '@/constants/config';

export default function Index() {
  const [request, response, promptAsync] = useAuthRequest(
    endpointConfig,
    discovery
  );

  useEffect(() => {
    const handleRedirect = async () => {
      if (response?.type === 'success') {
        const { code } = response.params;
        const tokenResponse = await exchangeCodeAsync(
          { ...endpointConfig, code },
          discovery
        );

        if (tokenResponse.accessToken) {
          await storeToken(tokenResponse);
          router.replace('/tabs');
        }
      }
    };

    handleRedirect();
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
