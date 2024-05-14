import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserHeader from '@/components/UserHeader';
import { spacing } from '@/constants/config';
import ArtistList from '@/components/ArtistList';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <UserHeader title="Top artistas" />
      <ArtistList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    flex: 1,
  },
});
