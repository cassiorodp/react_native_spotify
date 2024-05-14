import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Image as ExpoImage } from 'expo-image';

export default function Image({
  src,
  width,
  height,
  borderRadius,
}: {
  src: string;
  width: number;
  height: number;
  borderRadius?: number;
}) {
  return (
    <View
      testID="image-container"
      style={[
        styles.imageContainer,
        {
          width,
          height,
          borderRadius: borderRadius ?? 0,
        },
      ]}
    >
      <ExpoImage testID="image" style={styles.image} source={src} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: '100%',
  },
});
