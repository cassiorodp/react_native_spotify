import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { spacing } from '@/constants/config';
import { CustomText } from './CustomText';
import Image from './Image';
import { Link } from 'expo-router';

export default function ArtistItem(props: {
  item: {
    id: string;
    name: string;
    images: { url: string }[];
  };
}) {
  return (
    <Link
      href={{
        pathname: '/tabs/home/[artistId]',
        params: {
          artistId: props.item.id,
          artistName: props.item.name,
          artistImage: props.item.images[0].url,
        },
      }}
    >
      <View style={styles.container}>
        <Image width={64} height={64} src={props.item.images[0].url} />
        <CustomText>{props.item.name}</CustomText>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'center',
  },
});
