import { render, waitFor } from '@/utils/test-utils';
import React from 'react';
import { getArtistsData } from '@/api/endpoints';
import ArtistList from './ArtistList';

jest.mock('@/api/endpoints', () => ({
  getArtistsData: jest.fn(),
}));

test('renders ArtistList component', async () => {
  render(<ArtistList />);

  await waitFor(() => {
    expect(getArtistsData).toHaveBeenCalled();
  });
});
