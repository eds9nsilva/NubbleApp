import React from 'react';

import { Screen } from '@components';
import { AppScreenProps } from '@routes';
import { PostComment, usePostCommentList } from '@domain';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { PostCommentItem, PostCommentBottom } from './components';
import { useAppSafeArea } from '@hooks';

export function PostCommentScreen({
    route,
}: AppScreenProps<'PostCommentScreen'>) {
    const { postId } = route.params;

    const { bottom } = useAppSafeArea();

    const { data, fetchNextPage, hasNextPage } = usePostCommentList(postId);

    function renderItem({ item }: ListRenderItemInfo<PostComment>) {
        return PostCommentItem({ item });
    }

    return (
        <Screen canGoBack title='Comentários'>
            <FlatList
                data={data}
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: bottom }}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={
                    <PostCommentBottom
                        fetchNextPage={fetchNextPage}
                        hasNextPage={hasNextPage}
                    />
                }
            />
        </Screen>
    );
}