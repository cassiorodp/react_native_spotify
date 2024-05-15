import PlaylistModal from '@/app/tabs/playlists/playlist-modal';
import { render } from '@/utils/test-utils';

describe('Playlist modal tab component', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<PlaylistModal />);

    expect(toJSON()).toMatchSnapshot();
  });
});
