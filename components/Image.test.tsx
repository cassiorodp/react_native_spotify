import React from 'react';
import { render } from '@testing-library/react-native';
import Image from './Image';

describe('Image component', () => {
  it('renders without crashing', () => {
    render(<Image src="example.jpg" width={100} height={100} />);
  });

  it('renders the image with correct source', () => {
    const { getByTestId } = render(
      <Image src="example.jpg" width={100} height={100} />
    );
    const image = getByTestId('image');
    expect(image.props.source[0].uri).toEqual('example.jpg');
  });

  it('renders the image with correct dimensions', () => {
    const { getByTestId } = render(
      <Image src="example.jpg" width={100} height={100} borderRadius={100} />
    );
    const imageContainer = getByTestId('image-container');
    expect(imageContainer.props.style[1].width).toBe(100);
    expect(imageContainer.props.style[1].height).toBe(100);
    expect(imageContainer.props.style[1].borderRadius).toBe(100);
  });
});
