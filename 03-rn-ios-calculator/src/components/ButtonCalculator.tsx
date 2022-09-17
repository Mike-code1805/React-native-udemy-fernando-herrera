import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/AppTheme';

interface Props {
  text: string;
  color?: string;
  width?: boolean;
  action: (numerotext: string) => void;
}

export const ButtonCalculator = ({
  text,
  color = '#2D2D2D',
  width = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: width ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.buttontext,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
