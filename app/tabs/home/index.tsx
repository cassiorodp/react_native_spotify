import React from 'react';
import UserHeader from '@/components/UserHeader';
import ArtistList from '@/components/ArtistList';
import SafeAreaViewWithPadding from '@/components/SafeAreaViewWithPadding';

export default function Index() {
  return (
    <SafeAreaViewWithPadding>
      <UserHeader title="Top artistas" />
      <ArtistList />
    </SafeAreaViewWithPadding>
  );
}
