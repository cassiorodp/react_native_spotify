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
    render(<Button onPress={onPressMock} title="Test Button" />);
    const buttonElement = screen.getByText('Test Button');
    expect(buttonElement).toBeDefined();
  });

  it('calls the onPress function when pressed', async () => {
    const user = userEvent.setup();
    const onPressMock = jest.fn();
    render(<Button onPress={onPressMock} title="Test Button" />);
    const buttonElement = screen.getByText('Test Button');
    user.press(buttonElement);
    await waitFor(() => expect(onPressMock).toHaveBeenCalled());
  });

  it('disables the button when disabled prop is true', async () => {
    const user = userEvent.setup();
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button onPress={onPressMock} title="Test Button" disabled />
    );
    const buttonElement = screen.getByText('Test Button');

    user.press(buttonElement);

    await waitFor(() => expect(onPressMock).not.toHaveBeenCalled());
  });
});
