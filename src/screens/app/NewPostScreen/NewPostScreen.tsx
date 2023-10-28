import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function NewPostScreen({}: AppTabScreenProps<'NewPostScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall"> NewPostScreen </Text>
      <Button title="NewPostScreen" />
    </Screen>
  );
}
