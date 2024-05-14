import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import InfiniteFlatList from './InfiniteFlatList';
import PlaylistItem from './PlaylistItem';
import { getUserPlaylists } from '@/api/endpoints';
import { routeTags, spacing } from '@/constants/config';
import { Button } from './Button';
import { router } from 'expo-router';

export default function UserPlaylists() {
  const handleCreatePlaylist = () => {
    router.navigate('/tabs/playlists/playlist-modal');
  };

  return (
    <View style={styles.container}>
      <InfiniteFlatList
        ItemComponent={PlaylistItem}
        fetchData={(params) => getUserPlaylists({ ...params })}
        routeTag={routeTags.playlists}
      />

      <Button
        style={styles.button}
        title="Criar playlist"
        onPress={handleCreatePlaylist}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: spacing.lg,
    paddingBottom: spacing.lg,
  },
  button: {
    marginHorizontal: 'auto',
  },
});
