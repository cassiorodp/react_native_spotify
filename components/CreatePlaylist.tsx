import { StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { routeTags, spacing } from '@/constants/config';
import { CustomText } from './CustomText';
import { useTheme } from '@react-navigation/native';
import { Button } from './Button';
import { useMutation, useQueryClient } from 'react-query';
import { postPlaylist } from '@/api/endpoints';

export default function CreatePlaylist(props: {
  handleCloseModal: () => void;
}) {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(
    routeTags.createPlaylist,
    postPlaylist,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(routeTags.playlists);
      },
    }
  );
  const [playlistName, setPlaylistName] = useState('');
  const { colors } = useTheme();

  const handleCreatePlaylist = async () => {
    try {
      await mutateAsync({ name: playlistName });
      props.handleCloseModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <CustomText>Dê um nome a sua playlist</CustomText>
      <TextInput
        style={[
          styles.input,
          {
            borderBottomColor: colors.border,
            color: colors.text,
          },
        ]}
        value={playlistName}
        onChangeText={setPlaylistName}
        underlineColorAndroid="transparent"
        testID="playlist-name-input"
      />
      <Button
        disabled={isLoading || !playlistName}
        isLoading={isLoading}
        title={'Criar'}
        onPress={handleCreatePlaylist}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.xl,
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing.md,
  },
  input: {
    width: '80 %',
    borderBottomWidth: 0.5,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Rubik-Bold',
  },
});
