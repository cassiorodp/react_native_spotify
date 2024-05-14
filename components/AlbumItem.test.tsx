import React from 'react';
import { render } from '@testing-library/react-native';
import AlbumItem from '@/components/AlbumItem';

describe('AlbumItem', () => {
  const mockItem = {
    name: 'Test Album',
    images: [{ url: 'https://example.com/image.jpg' }],
  };

  it('renders the Image component with correct props', () => {
    const { getByTestId } = render(<AlbumItem item={mockItem} />);
    const image = getByTestId('image');
    expect(image.props.source[0].uri).toEqual(mockItem.images[0].url);
  });

  it('renders the CustomText component with correct text', () => {
    const { getByText } = render(<AlbumItem item={mockItem} />);
    const text = getByText(mockItem.name);
    expect(text).toBeTruthy();
  });
});
