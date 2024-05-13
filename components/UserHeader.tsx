import { StyleSheet, View } from 'react-native';
import React from 'react';
import { CustomText } from './CustomText';
import { useQuery } from 'react-query';
import { routeTags } from '@/env/config';
import { getUserData } from '@/api/endpoints';
import Image from './Image';

export default function UserHeader(props: { title: string }) {
  const { data } = useQuery(routeTags.user, getUserData);
  const profileImage = data?.data?.images[0].url;

  return (
    <View style={styles.container}>
      <CustomText>{props.title}</CustomText>

      <Image width={32} height={32} src={profileImage} />
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
