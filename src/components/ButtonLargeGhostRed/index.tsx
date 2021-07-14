import React from 'react';
import {Text} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

import {styles} from './styles';

type Props = RectButtonProps & {
  title: string;
};

export function ButtonLargeGhostRed({title, ...rest}: Props) {
  return (
    <RectButton style={styles.button} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </RectButton>
  );
}
