import React from 'react';

import {Button, Screen, Text} from '@components';
import { AppTabScreenProps } from '@routes';

export function FavoriteScreen({}: AppTabScreenProps<'FavoriteScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall"> FavoriteScreen </Text>
      <Button title="Settings" />
    </Screen>
  );
}
