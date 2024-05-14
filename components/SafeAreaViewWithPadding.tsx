import { StyleSheet } from 'react-native';
import React from 'react';
import { spacing } from '@/constants/config';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SafeAreaViewWithPadding(
  props: React.ComponentProps<typeof SafeAreaView> & {
    children: React.ReactNode;
  }
) {
  return (
    <SafeAreaView style={[props.style, styles.container]}>
      {props.children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    flex: 1,
  },
});
