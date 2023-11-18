import React from "react";
import { Dimensions, Image } from "react-native";

import { Box } from '@components';
import { Post } from "@domain";

type Props = Pick<Post, 'imageURL'>

export function PostImage({ imageURL }: Props) {
    return (
        <Box flexDirection='row' alignItems="center">
            <Image
                source={{ uri: imageURL }}
                resizeMode='cover'
                style={{
                    width: Dimensions.get('screen').width,
                    height: 300,
                    marginHorizontal: -24,
                }}
            />
        </Box>

    )
}