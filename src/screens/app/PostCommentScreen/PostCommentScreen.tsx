import React from 'react';

import { Box, Screen } from '@components';
import { AppScreenProps } from '@routes';
import { PostComment, usePostCommentList, userUser } from '@domain';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { PostCommentItem, PostCommentBottom, PostCommentTextMessage } from './components';
import { useAppSafeArea } from '@hooks';

export function PostCommentScreen({
    route,
}: AppScreenProps<'PostCommentScreen'>) {
    const { postId, postAuthorId } = route.params;

    const { bottom } = useAppSafeArea();

    const { data, fetchNextPage, hasNextPage, refresh } = usePostCommentList(postId);

    const { id } = userUser();

    function renderItem({ item }: ListRenderItemInfo<PostComment>) {
        return <PostCommentItem postComment={item} onRemoveComment={refresh} userId={id}  postAuthorId={postAuthorId} />;
    }

    return (
        <Screen flex={1} canGoBack title='Comentários'>
            <Box flex={1} justifyContent='space-between'>
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
                <PostCommentTextMessage postId={postId} onAddComment={refresh} />
            </Box>
        </Screen>
    );
}