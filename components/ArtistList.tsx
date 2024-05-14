import React from 'react';
import { routeTags, spacing } from '@/constants/config';
import { getArtistsData } from '@/api/endpoints';
import ArtistItem from './ArtistItem';
import InfiniteFlatList from './InfiniteFlatList';

export default function ArtistList() {
  return (
    <InfiniteFlatList
      fetchData={getArtistsData}
      routeTag={routeTags.artists}
      ItemComponent={ArtistItem}
    />
  );
}
