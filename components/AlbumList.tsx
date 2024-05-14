import React from 'react';
import { routeTags } from '@/constants/config';
import { getArtistAlbunsData } from '@/api/endpoints';
import AlbumItem from './AlbumItem';
import InfiniteFlatList from './InfiniteFlatList';

export default function AlbumList(props: { artistId: string }) {
  return (
    <InfiniteFlatList
      fetchData={(params) =>
        getArtistAlbunsData({ ...params, id: props.artistId })
      }
      routeTag={routeTags.albuns + props.artistId}
      ItemComponent={AlbumItem}
    />
  );
}
