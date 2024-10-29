import React from "react";

import { Box, ProfileAvatar, Text } from '@components';
import { Post } from "@domain";

type Props = Pick<Post, 'author'>

export function PostHeader({ author }: Props) {
    return (
        <Box flexDirection='row' alignItems="center" mb="s16">
            <ProfileAvatar profileURL={author.profileURL} />
            <Text ml="s12" semiBold preset="paragraphMedium">{author.userName}</Text>
        </Box>

    )
}