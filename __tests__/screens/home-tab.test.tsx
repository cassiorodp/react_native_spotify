import Index from '@/app/tabs/home';
import { render } from '@/utils/test-utils';

describe('Home tab component', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<Index />);

    expect(toJSON()).toMatchSnapshot();
  });
});
