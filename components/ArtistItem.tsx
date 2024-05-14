import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { spacing } from '@/constants/config';
import { CustomText } from './CustomText';
import Image from './Image';
import { Link } from 'expo-router';
import CustomItem from './CustomItem';

export default function ArtistItem(props: {
  item: {
    id: string;
    name: string;
    images: { url: string }[];
  };
}) {
  return (
    <Link
      testID="artist-link"
      href={{
        pathname: '/tabs/home/[artistId]',
        params: {
          artistId: props.item.id,
          artistName: props.item.name,
          artistImage: props.item.images[0].url,
        },
      }}
    >
      <CustomItem
        imageWidth={64}
        imageHeight={64}
        imageBorderRadius={64}
        imageSrc={props.item.images[0].url}
        title={props.item.name}
      />
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
