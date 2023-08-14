import React from 'react';
import {ActivityIndicator} from 'react-native';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {Text} from '../Text/Text';

interface PropsButton extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
}
export function Button({
  title,
  loading,
  ...touchableOpacityBoxProps
}: PropsButton) {
  return (
    <TouchableOpacityBox
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      alignItems="center"
      justifyContent="center"
      height={50}
      borderRadius="s16"
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={{color: '#fff'}} preset="headingMedium" bold>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
