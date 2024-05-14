import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react-native';
import ModalHeader from '@/components/ModalHeader';
import { render } from '@/utils/test-utils';

describe('ModalHeader', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls handleCloseModal when icon is pressed', async () => {
    const handleCloseModal = jest.fn();
    const { getByTestId } = render(
      <ModalHeader handleCloseModal={handleCloseModal} />
    );
    await waitFor(() => fireEvent.press(getByTestId('close-icon')));
    expect(handleCloseModal).toHaveBeenCalled();
  });
});
