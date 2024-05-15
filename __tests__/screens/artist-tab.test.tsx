import Albuns from '@/app/tabs/home/[artistId]';
import { render } from '@/utils/test-utils';

describe('Album tab component', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<Albuns />);

    expect(toJSON()).toMatchSnapshot();
  });
});
