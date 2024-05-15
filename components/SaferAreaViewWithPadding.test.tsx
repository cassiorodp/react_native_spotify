import React from 'react';
import { render } from '@testing-library/react-native';
import SafeAreaViewWithPadding from './SafeAreaViewWithPadding';
import { Text } from 'react-native';

describe('SafeAreaViewWithPadding', () => {
  it('renders children', () => {
    const { getByText } = render(
      <SafeAreaViewWithPadding>
        <Text>Test Child</Text>
      </SafeAreaViewWithPadding>
    );

    expect(getByText('Test Child')).toBeDefined();
  });
});
