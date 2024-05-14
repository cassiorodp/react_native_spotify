import React from 'react';
import { waitFor } from '@testing-library/react-native';
import InfiniteFlatList from './InfiniteFlatList';
import { render } from '@/utils/test-utils';
import { routeTags } from '@/constants/config';
import { Text } from 'react-native';

const mockData = {
  pages: [
    {
      data: {
        items: [
          {
            id: '1',
            name: 'Item 1',
          },
          {
            id: '2',
            name: 'Item 2',
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

describe('InfiniteFlatList', () => {
  it('renders InfiniteFlatList', async () => {
    const fetchData = jest.fn();
    const ItemComponent = ({ item }: { item: { name: string } }) => (
      <Text>{item.name}</Text>
    );

    const { getByText } = render(
      <InfiniteFlatList
        fetchData={fetchData}
        routeTag={routeTags.artists}
        ItemComponent={ItemComponent}
      />
    );

    await waitFor(() => expect(getByText('Item 1')).toBeDefined());
    await waitFor(() => expect(getByText('Item 2')).toBeDefined());
  });
});
