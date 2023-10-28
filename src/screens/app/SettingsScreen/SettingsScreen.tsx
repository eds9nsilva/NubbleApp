import React from 'react';


import {Button, Screen, Text} from '@components';
import { AppScreenProps } from '@routes';

export function SettingsScreen({}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall"> SettingScreen </Text>
      <Button title="Settings" />
    </Screen>
  );
}
