import React from 'react';

import {Button, Screen, Text} from '@components';

export function MyProfileScreen() {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall"> MyProfileScreen </Text>
      <Button title="MyProfileScreen" />
    </Screen>
  );
}
