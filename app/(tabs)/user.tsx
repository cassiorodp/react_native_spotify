import { StyleSheet, View } from 'react-native';
import React from 'react';
import { CustomText } from '@/components/CustomText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from 'react-query';
import { routeTags } from '@/env/config';
import { getUserData } from '@/api/endpoints';
import { Button } from '@/components/Button';
import { clearSecureStore } from '@/utils';
import { router } from 'expo-router';
import Image from '@/components/Image';

export default function User() {
  const { data } = useQuery(routeTags.user, getUserData);
  const userName = data?.data?.display_name;
  const profileImage = data?.data?.images[0].url;

  const handleLogout = async () => {
    await clearSecureStore();
    router.replace('/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userContainer}>
        <View style={styles.imageContainer}>
          <Image width={128} height={128} src={profileImage} />
        </View>
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
  imageContainer: {
    width: 128,
    height: 128,
    borderRadius: 128,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: '100%',
  },
});
