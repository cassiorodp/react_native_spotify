import { ActivityIndicator, StyleSheet, View } from 'react-native';
import React from 'react';
import { CustomText } from '@/components/CustomText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from 'react-query';
import { routeTags } from '@/constants/config';
import { getUserData } from '@/api/endpoints';
import { Button } from '@/components/Button';
import { clearSecureStore } from '@/utils';
import { router } from 'expo-router';
import Image from '@/components/Image';
import { useTheme } from '@react-navigation/native';

export default function User() {
  const { data, isLoading } = useQuery(routeTags.user, getUserData);
  const userName = data?.data?.display_name;
  const profileImage = data?.data?.images[0].url;
  const { colors } = useTheme();

  const handleLogout = async () => {
    await clearSecureStore();
    router.replace('/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={colors.primary} />
        ) : (
          <Image width={128} height={128} src={profileImage} />
        )}
        <CustomText type="subtitle">{userName}</CustomText>
      </View>

      <Button title="Sair" onPress={handleLogout} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userContainer: {
    flexDirection: 'column',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
  },
});
