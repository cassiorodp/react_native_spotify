import SafeAreaViewWithPadding from '@/components/SafeAreaViewWithPadding';
import UserHeader from '@/components/UserHeader';
import UserPlaylists from '@/components/UserPlaylists';

export default function PlayList() {
  return (
    <SafeAreaViewWithPadding>
      <UserHeader title="Minhas playlists" />
      <UserPlaylists />
    </SafeAreaViewWithPadding>
  );
}
