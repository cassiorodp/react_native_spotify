import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { spacing } from '@/env/config';
import { CustomText } from './CustomText';
import Image from './Image';

export default function ArtistItem(props: {
  item: {
    name: string;
    images: { url: string }[];
  };
}) {
  return (
    <View style={styles.container}>
      <Image width={64} height={64} src={props.item.images[0].url} />
      <CustomText>{props.item.name}</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'center',
  },
});
