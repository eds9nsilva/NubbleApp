import React from 'react';

import { Box, BoxProps, Icon } from '@components';
import { useAppSafeArea } from '@hooks';
import { SimpleLogo } from '@brand';

export function HomeHeader() {
    const { top } = useAppSafeArea();

    return (
        <Box {...$wrapper} style={{ paddingTop: top }}>
            <SimpleLogo width={70} />
            <Box flexDirection="row">
                <Box mr="s24">
                    <Icon name="searchIcon" />
                </Box>
                <Box mr="s24">
                    <Icon name="bellIcon" />
                </Box>
                <Icon name="commentIcon" />
            </Box>
        </Box>
    );
}

const $wrapper: BoxProps = {
    flexDirection: 'row',

    justifyContent: 'space-between',
    paddingBottom: 's24',
    paddingHorizontal: 's24',
};