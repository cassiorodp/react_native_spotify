import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import { useInfiniteQuery } from 'react-query';
import { routeTags, spacing } from '@/env/config';
import { getArtistsData } from '@/api/endpoints';
import { useTheme } from '@react-navigation/native';
import ArtistItem from './ArtistItem';
import { Link } from 'expo-router';

export default function ArtistList() {
  const { data, isLoading, isRefetching, hasNextPage, fetchNextPage, refetch } =
    useInfiniteQuery(
      routeTags.artists,
      ({ pageParam }) =>
        getArtistsData({
          page: pageParam ?? 0,
          limit: 10,
        }),
      {
        getNextPageParam: (lastPage) => {
          const params = new URLSearchParams(
            new URL(lastPage.data.next).search
          );
          const offset = params.get('offset');
          if (!offset) return undefined;
          return Math.floor(parseInt(offset) / 10);
        },
      }
    );

  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          style={styles.loading}
          size="large"
          color={colors.primary}
        />
      ) : (
        <FlatList
          contentContainerStyle={styles.list}
          data={data?.pages.map((page) => page.data.items).flat()}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Link
              href={{
                pathname: '/tabs/home/[artist]',
                params: { artist: item.id },
              }}
            >
              <ArtistItem item={item} />
            </Link>
          )}
          onEndReached={() => {
            if (hasNextPage) {
              fetchNextPage();
            }
          }}
          refreshControl={
            <RefreshControl
              refreshing={isRefetching}
              onRefresh={() => {
                if (!isRefetching || !isLoading) {
                  refetch();
                }
              }}
              colors={[colors.primary]}
            />
          }
          ListFooterComponent={
            hasNextPage ? (
              <ActivityIndicator size="large" color={colors.primary} />
            ) : null
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: spacing.lg,
  },
  list: {
    gap: spacing.md,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
