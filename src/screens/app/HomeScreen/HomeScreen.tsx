import React from 'react';

import { PostItem, Screen, } from '@components';
import { AppTabScreenProps } from '@routes';
import { Post, usePostList } from '@domain';
import { FlatList, ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';
import { HomeHeader } from './Components/HomeScreen';
import { HomeEmpty } from './Components/HomeEmpty';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  const { error, loading, postList, refetch } = usePostList();

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return (
      <PostItem post={item} />
    )
  }

  return (
    <Screen style={$screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ flex: postList.length == 0 ? 1 : undefined }}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={<HomeEmpty refetch={refetch} error={error} loading={loading} />}
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
  flex: 1
};