import { getSecureStore } from '@/utils';
import { isAfter } from 'date-fns';
import useAuth from './useAuth';
import { config } from '@/env/config';
import { renderHook } from '@testing-library/react-native';

jest.mock('@/utils', () => ({
  getSecureStore: jest.fn(),
}));

jest.mock('date-fns', () => ({
  isAfter: jest.fn(),
}));

describe('useAuth', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return true if token is present and not expired', () => {
    const token = 'some-token';
    const expiresIn = '2022-01-01T00:00:00.000Z';

    (getSecureStore as jest.Mock).mockReturnValueOnce(token);
    (getSecureStore as jest.Mock).mockReturnValueOnce(expiresIn);
    (isAfter as jest.Mock).mockReturnValueOnce(false);

    const { result } = renderHook(() => useAuth());

    expect(result.current).toBe(true);
    expect(getSecureStore).toHaveBeenCalledWith(config.tokenStoreKey);
    expect(getSecureStore).toHaveBeenCalledWith(config.tokenStoreExpiryKey);
  });

  it('should return false if token is not present', () => {
    (getSecureStore as jest.Mock).mockReturnValueOnce(undefined);

    const { result } = renderHook(() => useAuth());

    expect(result.current).toBe(false);
  });

  it('should return false if token is expired', () => {
    const token = 'some-token';
    const expiresIn = '2020-01-01T00:00:00.000Z';

    (getSecureStore as jest.Mock).mockReturnValueOnce(token);
    (getSecureStore as jest.Mock).mockReturnValueOnce(expiresIn);
    (isAfter as jest.Mock).mockReturnValueOnce(true);

    const { result } = renderHook(() => useAuth());

    expect(result.current).toBe(false);
    expect(getSecureStore).toHaveBeenCalledWith(config.tokenStoreKey);
    expect(getSecureStore).toHaveBeenCalledWith(config.tokenStoreExpiryKey);
  });
});
