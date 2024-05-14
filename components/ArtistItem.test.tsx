import React from 'react';
import { render } from '@testing-library/react-native';
import ArtistItem from './ArtistItem';

describe('ArtistItem', () => {
  const artist = {
    name: 'Test Artist',
    images: [{ url: 'https://example.com/image.jpg' }],
    id: '123',
  };

  it('renders the correct link', () => {
    const { getByTestId } = render(<ArtistItem item={artist} />);
    const link = getByTestId('artist-link');

    expect(link.props.href).toContain(`/tabs/home/${artist.id}`);
  });
});
