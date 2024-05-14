import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react-native';
import CreatePlaylist from '@/components/CreatePlaylist';
import { postPlaylist } from '@/api/endpoints';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render } from '@/utils/test-utils';

jest.mock('@/api/endpoints');

describe('CreatePlaylist', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const { getByText } = render(
      <CreatePlaylist handleCloseModal={jest.fn()} />
    );
    expect(getByText('Dê um nome a sua playlist')).toBeTruthy();
  });

  it('changes TextInput when text is entered', async () => {
    const { getByTestId } = render(
      <CreatePlaylist handleCloseModal={jest.fn()} />
    );
    const textInput = getByTestId('playlist-name-input');
    await waitFor(() => fireEvent.changeText(textInput, 'New Playlist'));
    expect(textInput.props.value).toBe('New Playlist');
  });

  it('calls handleCreatePlaylist when Button is pressed', async () => {
    const handleCloseModal = jest.fn();
    const { getByText, getByTestId } = render(
      <CreatePlaylist handleCloseModal={handleCloseModal} />
    );
    const textInput = getByTestId('playlist-name-input');

    fireEvent.changeText(textInput, 'New Playlist');
    fireEvent.press(getByText('Criar'));
    await waitFor(() => expect(handleCloseModal).toHaveBeenCalled());
  });
});
