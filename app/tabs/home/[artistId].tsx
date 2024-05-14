import { StyleSheet } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import AlbumList from '@/components/AlbumList';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArtistHeader from '@/components/ArtistHeader';
import { spacing } from '@/constants/config';
import SafeAreaViewWithPadding from '@/components/SafeAreaViewWithPadding';

export default function Albuns() {
  const { artistId, artistName, artistImage } = useLocalSearchParams<{
    artistId: string;
    artistName: string;
    artistImage: string;
  }>();

  if (!artistId || !artistName || !artistImage) return null;

  return (
    <SafeAreaViewWithPadding>
      <ArtistHeader artistName={artistName} artistImage={artistImage} />
      <AlbumList artistId={artistId} />
    </SafeAreaViewWithPadding>
  );
}
