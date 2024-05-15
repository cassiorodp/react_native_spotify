import React from 'react';
import AlbumItem from './AlbumItem';
import { render } from '@/utils/test-utils';

test('renders album item with correct props', () => {
  const item = {
    name: 'Test Album',
    images: [{ url: 'https://example.com/album.jpg' }],
    release_date: '2022-01-01',
  };

  const { getByText } = render(<AlbumItem item={item} />);

  const titleElement = getByText('Test Album');
  const subtitleElement = getByText('01/01/2022');

  expect(titleElement).toBeDefined();
  expect(subtitleElement).toBeDefined();
});
