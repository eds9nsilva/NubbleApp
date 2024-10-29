import React from 'react';

import { Box, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';
import { usePostCommentList } from '@domain';

export function PostCommentScreen({
    route,
}: AppScreenProps<'PostCommentScreen'>) {
    const { postId } = route.params;

    const { data } = usePostCommentList(postId);

    return (
        <Screen canGoBack title='Comentários'>
            <Box>
                <Text>Tela comentario</Text>
            </Box>
        </Screen>
    );
}