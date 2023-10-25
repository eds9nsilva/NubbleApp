import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from 'src/routes/AppStack';

import {Button, Screen, Text} from '@components';
type ScreenProps = NativeStackScreenProps<AppStackParamList, 'SettingsScreen'>;

export function SettingsScreen({}: ScreenProps) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall"> SettingScreen </Text>
      <Button title="Settings" />
    </Screen>
  );
}
