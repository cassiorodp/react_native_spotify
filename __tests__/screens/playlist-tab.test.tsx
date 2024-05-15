import Albuns from '@/app/tabs/home/[artistId]';
import Explore from '@/app/tabs/playlists';
import { render } from '@/utils/test-utils';

describe('Playlist tab component', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<Explore />);

    expect(toJSON()).toMatchSnapshot();
  });
});
