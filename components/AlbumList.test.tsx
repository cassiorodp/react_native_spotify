import React from 'react';
import AlbumList from './AlbumList';
import { render, waitFor } from '@/utils/test-utils';
import { getArtistAlbunsData } from '@/api/endpoints';

jest.mock('@/api/endpoints', () => ({
  getArtistAlbunsData: jest.fn(),
}));

test('renders AlbumList component', async () => {
  const artistId = '123';
  render(<AlbumList artistId={artistId} />);

  await waitFor(() => {
    expect(getArtistAlbunsData).toHaveBeenCalled();
  });
});
