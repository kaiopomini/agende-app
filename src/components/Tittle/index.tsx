import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

import BackIcon from '../../assets/left-arrow.png';
import {styles} from './styles';

type Props = {
  title: string;
  moveBack: () => void;
};

export function Title({title, moveBack}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={moveBack}>
        <Image source={BackIcon} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
