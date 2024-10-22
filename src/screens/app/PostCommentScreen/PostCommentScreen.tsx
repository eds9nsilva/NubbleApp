import React from 'react';

import { Box, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';

export function PostCommentScreen({
    route,
}: AppScreenProps<'PostCommentScreen'>) {


    return (
        <Screen canGoBack tittle='Cometários'>
            <Box>
                <Text>Tela comentario</Text>
            </Box>
        </Screen>
    );
}