import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomItem from './CustomItem';

export default function PlaylistItem(props: {
  item: {
    name: string;
    images: { url: string }[];
    description: string;
  };
}) {
  return (
    <CustomItem
      imageHeight={72}
      imageWidth={72}
      title={props.item.name}
      imageSrc={props.item.images ? props.item.images[0].url : ''}
      subtitle={props.item.description || ''}
    />
  );
}

const styles = StyleSheet.create({});
