import { ActivityIndicator, StyleSheet, View } from 'react-native';
import React from 'react';
import { CustomText } from './CustomText';
import { useQuery } from 'react-query';
import { routeTags } from '@/constants/config';
import { getUserData } from '@/api/endpoints';
import Image from './Image';
import { useTheme } from '@react-navigation/native';

export default function UserHeader(props: { title: string }) {
  const { data, isLoading } = useQuery(routeTags.user, getUserData);
  const profileImage = data?.data?.images[0].url;
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <CustomText>{props.title}</CustomText>

      {isLoading ? (
        <ActivityIndicator size="small" color={colors.primary} />
      ) : (
        <Image width={32} height={32} src={profileImage} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
