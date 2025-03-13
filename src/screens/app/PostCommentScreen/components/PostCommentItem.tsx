import React from "react";
import { Box, ProfileAvatar, Text } from "@components";
import { PostComment } from "@domain";

interface Props {
    item: PostComment;
}

export function PostCommentItem({ item }: Props) {
    return (
        <Box flexDirection="row" alignItems="center" mb="s16">
            <ProfileAvatar profileURL={item.author.profileURL} />
            <Box ml="s12" flex={1}>
                <Text preset="paragraphSmall" bold>{item.author.userName}</Text>
                <Text preset="paragraphSmall" color="gray1">
                    {item.message} - {item.createdAtRelative}
                </Text>
            </Box>
        </Box>
    );
}