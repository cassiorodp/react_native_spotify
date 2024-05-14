import React from 'react';
import { render } from '@testing-library/react-native';
import CustomItem from '../components/CustomItem';

describe('CustomItem', () => {
  const mockData = {
    imageSrc: 'testImage.png',
    imageWidth: 100,
    imageHeight: 100,
    title: 'Test Title',
  };

  it('renders correctly', () => {
    const { getByTestId } = render(<CustomItem {...mockData} />);
    expect(getByTestId('custom-item-container')).toBeTruthy();
  });

  it('displays the correct image', () => {
    const { getByTestId } = render(<CustomItem {...mockData} />);
    expect(getByTestId('image').props.source[0].uri).toBe(mockData.imageSrc);
  });

  it('displays the correct title', () => {
    const { getByText } = render(<CustomItem {...mockData} />);
    expect(getByText(mockData.title)).toBeTruthy();
  });

  it('displays the correct subtitle when provided', () => {
    const subtitle = 'Test Subtitle';
    const { getByText } = render(
      <CustomItem {...mockData} subtitle={subtitle} />
    );
    expect(getByText(subtitle)).toBeTruthy();
  });
});
