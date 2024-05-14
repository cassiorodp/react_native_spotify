import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

type CustomTextProps = React.ComponentProps<typeof Text> & {
  type?:
    | 'default'
    | 'small'
    | 'title'
    | 'defaultSemiBold'
    | 'subtitle'
    | 'button'
    | 'link';
};

export function CustomText({
  style,
  type = 'default',
  ...rest
}: CustomTextProps) {
  const { colors } = useTheme();

  return (
    <Text
      style={[
        { color: colors.text },
        type === 'default' ? styles.default : undefined,
        type === 'small' ? styles.small : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'button'
          ? [styles.buttonText, { color: colors.background }]
          : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Rubik-Regular',
  },
  small: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Rubik-Regular',
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Rubik-SemiBold',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Rubik-Bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 24,
    fontFamily: 'Rubik-Medium',
  },
  link: {
    fontFamily: 'Rubik-Regular',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Rubik-Bold',
  },
});
