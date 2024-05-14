import React from 'react';
import { waitFor } from '@testing-library/react-native';
import ArtistList from './ArtistList';
import { render } from '@/utils/test-utils';

const mockData = {
  pages: [
    {
      data: {
        items: [
          {
            id: '1',
            name: 'Artist 1',
            images: [{ url: 'http://example.com' }],
          },
          {
            id: '2',
            name: 'Artist 2',
            images: [{ url: 'http://example.com' }],
          },
        ],
        next: 'http://example.com?page=2',
      },
    },
  ],
};

jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'),
  useInfiniteQuery: jest.fn(() => ({
    data: mockData,
    isLoading: false,
    fetchNextPage: jest.fn(),
  })),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('ArtistList', () => {
  it('renders ArtistList', async () => {
    const { getByText } = render(<ArtistList />);

    await waitFor(() => expect(getByText('Artist 1')).toBeDefined());
    await waitFor(() => expect(getByText('Artist 2')).toBeDefined());
  });
});
