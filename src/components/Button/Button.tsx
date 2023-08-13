import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';

interface PropsButton {
  title: string;
}
export function Button({title}: PropsButton) {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 16,
        backgroundColor: '#074c4e',
        paddingHorizontal: 20,
        paddingVertical: 14,
        alignItems: 'center',
      }}>
      <Text style={{color: '#fff'}} preset="headingMedium" bold>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
