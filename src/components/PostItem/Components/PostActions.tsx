import React from "react";
import { Box, Icon, IconProps, Text, TouchableOpacityBox } from "@components";
import { Post } from "@domain";

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;

export function PostActions({ commentCount, favoriteCount, reactionCount }: Props) {

    //TODO
    function likePost() { }

    function navigateToComments() { }

    function favoritePost() { }

    return (
        <Box flexDirection="row" mt="s16">
            <Item
                onPress={likePost}
                text={reactionCount}
                icon={{
                    default: 'heartIcon',
                    marked: "heartFillIcon"
                }}
                marked
            />
            <Item
                onPress={navigateToComments}
                text={commentCount}
                icon={{
                    default: 'commentIcon',
                    marked: "commentIcon"
                }}
                marked={false}
            />
            <Item
                onPress={favoritePost}
                text={favoriteCount}
                icon={{
                    default: 'bookmarkIcon',
                    marked: "bookmarkFillIcon"
                }}
                marked={false}
            />
        </Box>
    )
}

interface ItemProps {
    onPress: () => void;
    text: number;
    marked: boolean;
    icon: {
        default: IconProps['name'],
        marked: IconProps['name'],
    }
}

function Item({ icon, onPress, text, marked }: ItemProps) {
    return (
        <TouchableOpacityBox onPress={onPress} flexDirection="row" alignItems="center" mr="s24">
            <Icon color={marked ? 'market' : undefined} name={marked ? icon.marked : icon.default} />
            {text > 0 && (
                <Text preset="paragraphSmall" bold ml="s4">
                    {text}
                </Text>
            )}
        </TouchableOpacityBox>
    )
}