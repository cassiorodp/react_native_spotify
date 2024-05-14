import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import UserPlaylists from './UserPlaylists';
import { router } from 'expo-router';
import { render } from '@/utils/test-utils';

jest.mock('expo-router', () => ({
  router: {
    navigate: jest.fn(),
  },
}));

describe('UserPlaylists', () => {
  it('renders the button correctly', () => {
    const { getByText } = render(<UserPlaylists />);

    expect(getByText('Criar playlist')).toBeTruthy();
  });

  it('calls handleCreatePlaylist when button is pressed', () => {
    const { getByText } = render(<UserPlaylists />);
    const createPlaylistButton = getByText('Criar playlist');

    fireEvent.press(createPlaylistButton);

    expect(router.navigate).toHaveBeenCalled();
  });
});
