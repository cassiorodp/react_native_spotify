import React from 'react';
import CustomItem from './CustomItem';
import { format } from 'date-fns';

export default function AlbumItem(props: {
  item: {
    name: string;
    images: { url: string }[];
    release_date: string;
  };
}) {
  return (
    <CustomItem
      imageHeight={72}
      imageWidth={72}
      imageSrc={props.item.images[0].url}
      title={props.item.name}
      subtitle={format(new Date(props.item.release_date), 'dd/MM/yyyy')}
    />
  );
}
