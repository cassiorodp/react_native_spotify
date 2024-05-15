import React from 'react';
import { render } from '@testing-library/react-native';
import PlaylistItem from './PlaylistItem';

describe('PlaylistItem', () => {
  const item = {
    name: 'Test Playlist',
    images: [{ url: 'https://example.com/image.jpg' }],
    description: 'Test description',
  };

  it('renders the playlist item with correct props', () => {
    const { getByText, getByTestId } = render(<PlaylistItem item={item} />);

    const titleElement = getByText(item.name);
    const imageElement = getByTestId('image');
    const descriptionElement = getByText(item.description);

    expect(titleElement).toBeDefined();
    expect(imageElement.props.source[0].uri).toBe(item.images[0].url);
    expect(descriptionElement).toBeDefined();
  });
});
