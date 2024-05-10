/* eslint-disable prettier/prettier */
import React from 'react';
import { render } from '@testing-library/react-native';
import { CustomText } from './CustomText';

describe('CustomText', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<CustomText>Hello World</CustomText>);
    const textElement = getByText('Hello World');
    expect(textElement).toBeDefined();
  });

  it('applies the correct style based on the type prop', () => {
    const { getByText } = render(
      <CustomText type="title">Hello World</CustomText>
    );
    const textElement = getByText('Hello World');
    expect(textElement).toBeDefined();
  });
});
