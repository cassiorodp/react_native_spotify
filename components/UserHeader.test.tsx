import UserHeader from './UserHeader';
import { render } from '@/utils/test-utils';
import { QueryClient, QueryClientProvider } from 'react-query';

// Mock da função getUserData
jest.mock('@/api/endpoints', () => ({
  getUserData: jest.fn().mockResolvedValue({
    data: {
      images: [{ url: 'https://example.com/image.jpg' }],
    },
  }),
}));

describe('UserHeader', () => {
  it('renders the title and user image', async () => {
    const { getByText, findByTestId } = render(
      <UserHeader title="Test Title" />
    );

    expect(getByText('Test Title')).toBeTruthy();

    const image = await findByTestId('image-container');
    expect(image).toBeDefined();
  });
});
