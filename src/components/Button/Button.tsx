import React from 'react';
import {ActivityIndicator} from 'react-native';
import {ThemeColors} from '../../theme/theme';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {Text} from '../Text/Text';

export type ButtonPreset = 'primary' | 'outline' | 'secondary';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

const primary: ButtonUI = {
  container: {
    backgroundColor: 'primary',
  },
  content: 'primaryContrast',
};

const outline: ButtonUI = {
  container: {
    borderWidth: 1,
    borderColor: 'primary',
  },
  content: 'primary',
};
interface PropsButton extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
}
export function Button({
  title,
  loading,
  preset = 'primary',
  ...touchableOpacityBoxProps
}: PropsButton) {
  const buttonPreset = preset === 'primary' ? primary : outline;
  return (
    <TouchableOpacityBox
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      alignItems="center"
      justifyContent="center"
      height={50}
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="headingMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
