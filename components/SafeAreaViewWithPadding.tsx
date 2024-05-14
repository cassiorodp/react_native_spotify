import { StyleSheet } from 'react-native';
import React from 'react';
import { spacing } from '@/constants/config';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SafeAreaViewWithPadding(props: {
  children: React.ReactNode;
}) {
  return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    flex: 1,
  },
});
