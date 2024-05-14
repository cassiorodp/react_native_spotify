import React from 'react';
import { render } from '@testing-library/react-native';
import ArtistItem from './ArtistItem';

describe('ArtistItem', () => {
  const artist = {
    name: 'Test Artist',
    images: [{ url: 'https://example.com/image.jpg' }],
  };

  it('renders the artist name', () => {
    const { getByText } = render(<ArtistItem item={artist} />);
    expect(getByText('Test Artist')).toBeTruthy();
  });
});
