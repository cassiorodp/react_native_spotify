import {
  RenderAPI,
  RenderOptions,
  render,
} from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions
): RenderAPI => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react-native';

export { customRender as render };
