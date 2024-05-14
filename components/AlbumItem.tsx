import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CustomText } from './CustomText';
import Image from './Image';
import { spacing } from '@/constants/config';

export default function AlbumItem(props: {
  item: {
    name: string;
    images: { url: string }[];
  };
}) {
  return (
    <View style={styles.container}>
      <Image width={72} height={72} src={props.item.images[0].url} />
      <CustomText>{props.item.name}</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
  },
});
