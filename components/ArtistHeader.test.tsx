import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { router } from 'expo-router';
import ArtistHeader from '@/components/ArtistHeader';

jest.mock('@react-navigation/native', () => ({
  useTheme: jest.fn().mockReturnValue({
    colors: {
      text: '#000',
    },
  }),
}));

jest.mock('expo-router', () => ({
  router: {
    back: jest.fn(),
  },
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('ArtistHeader', () => {
  it('renders artist name', () => {
    const { getByText } = render(
      <ArtistHeader
        artistName="Test Artist"
        artistImage="https://example.com/image.jpg"
      />
    );
    expect(getByText('Test Artist')).toBeTruthy();
  });

  it('renders artist image', () => {
    const { getByTestId } = render(
      <ArtistHeader
        artistName="Test Artist"
        artistImage="https://example.com/image.jpg"
      />
    );
    const image = getByTestId('image');
    expect(image.props.source[0].uri).toBe('https://example.com/image.jpg');
  });

  it('calls router.back when back button is pressed', async () => {
    const { findByTestId } = render(
      <ArtistHeader
        artistName="Test Artist"
        artistImage="https://example.com/image.jpg"
      />
    );
    const backButton = await findByTestId('back-button');
    fireEvent.press(backButton);
    expect(router.back).toHaveBeenCalled();
  });
});
