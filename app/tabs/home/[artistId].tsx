import { StyleSheet } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import AlbumList from '@/components/AlbumList';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArtistHeader from '@/components/ArtistHeader';
import { spacing } from '@/constants/config';

export default function Albuns() {
  const { artistId, artistName, artistImage } = useLocalSearchParams<{
    artistId: string;
    artistName: string;
    artistImage: string;
  }>();

  if (!artistId || !artistName || !artistImage) return null;

  return (
    <SafeAreaView style={styles.container}>
      <ArtistHeader artistName={artistName} artistImage={artistImage} />
      <AlbumList artistId={artistId} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    flex: 1,
  },
});
