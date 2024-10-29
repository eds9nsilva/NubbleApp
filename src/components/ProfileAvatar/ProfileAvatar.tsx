import React from "react";
import { Image } from "react-native";

interface PropsProfileAvatar {
    profileURL: string;
    
    /** @default 32*/
    size?: number;
    /** @default 14*/
    borderRadius?: number;
}

export function ProfileAvatar({ profileURL, size = 32, borderRadius = 14 }: PropsProfileAvatar) {
    return (
        <Image
            source={{ uri: profileURL }}
            style={{ width: size, height: size, borderRadius: borderRadius }}
        />
    );
}