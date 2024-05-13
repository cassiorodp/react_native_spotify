import { fireEvent, waitFor } from '@testing-library/react-native';
import { clearSecureStore } from '@/utils';
import { router } from 'expo-router';
import { render } from '@/utils/test-utils';
import User from '@/app/(tabs)/user';

jest.mock('expo-router', () => ({
  router: {
    replace: jest.fn(),
  },
}));

jest.mock('@/utils', () => ({
  clearSecureStore: jest.fn(),
}));

jest.mock('@/api/endpoints', () => ({
  getUserData: jest.fn().mockResolvedValue({
    data: {
      display_name: 'Test User',
      images: [{ url: 'https://example.com/image.jpg' }],
    },
  }),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('User screen', () => {
  it('renders the matching snapshot', () => {
    const { toJSON } = render(<User />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders user data and logs out on button press', async () => {
    const { getByText, findByText } = render(<User />);

    expect(await findByText('Test User')).toBeTruthy();

    fireEvent.press(getByText('Sair'));

    expect(clearSecureStore).toHaveBeenCalled();
    await waitFor(() => expect(router.replace).toHaveBeenCalledWith('/'));
  });
});
