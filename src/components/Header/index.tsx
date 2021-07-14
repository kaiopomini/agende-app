import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {styles} from './styles';
import LogoutIcon from '../../assets/logout.png';
import Calendar from '../../assets/calendar.png';

type Props = {
  name: string;
  addSchedule: () => void;
  logOut: () => void;
};

export function Header({name, addSchedule, logOut}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.greetingsContainer}>
        <View>
          <Text style={styles.greeetingsText}>
            Olá, <Text style={styles.greeetingsTextName}>{name}</Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.logout} onPress={logOut}>
          <Image source={LogoutIcon} style={styles.logoutIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.iconsContainer}>
        <Image source={Calendar} style={styles.calendar} />
        <RectButton style={styles.addButton} onPress={addSchedule}>
          <Text style={styles.addButtonText}>+</Text>
        </RectButton>
      </View>
    </View>
  );
}
