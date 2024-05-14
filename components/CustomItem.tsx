import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CustomText } from './CustomText';
import Image from './Image';
import { spacing } from '@/constants/config';

export default function CustomItem(props: {
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  imageBorderRadius?: number;
  title: string;
  subtitle?: string;
}) {
  return (
    <View style={styles.container} testID="custom-item-container">
      <Image
        width={props.imageWidth}
        height={props.imageHeight}
        borderRadius={props.imageBorderRadius}
        src={props.imageSrc}
      />
      <View style={styles.textContainer}>
        <CustomText>{props.title}</CustomText>
        {props.subtitle && (
          <CustomText type="small">{props.subtitle}</CustomText>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
  },
  textContainer: {
    flexDirection: 'column',
    gap: spacing.xs,
  },
});
