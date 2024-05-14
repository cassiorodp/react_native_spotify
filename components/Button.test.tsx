import React from 'react';
import {
  render,
  userEvent,
  screen,
  waitFor,
} from '@testing-library/react-native';
import { Button } from './Button';

jest.useFakeTimers();

describe('Button', () => {
  it('renders correctly with default props', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button onPress={onPressMock} title="Test Button" />
    );
    const buttonElement = getByText('Test Button');
    expect(buttonElement).toBeDefined();
  });

  it('calls the onPress function when pressed', async () => {
    const user = userEvent.setup();
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button onPress={onPressMock} title="Test Button" />
    );
    const buttonElement = getByText('Test Button');
    user.press(buttonElement);
    await waitFor(() => expect(onPressMock).toHaveBeenCalled());
  });

  it('disables the button when disabled prop is true', async () => {
    const user = userEvent.setup();
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button onPress={onPressMock} title="Test Button" disabled />
    );
    const buttonElement = getByText('Test Button');

    user.press(buttonElement);

    await waitFor(() => expect(onPressMock).not.toHaveBeenCalled());
  });

  it('shows ActivityIndicator when isLoading prop is true', async () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Button onPress={onPressMock} title="Test Button" isLoading />
    );
    const loadingElement = getByTestId('loading-indicator');

    expect(loadingElement).toBeDefined();
  });
});
