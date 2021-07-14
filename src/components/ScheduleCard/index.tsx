import React from 'react';
import {Text, View} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import {theme} from '../../global/styles/theme';

import {styles} from './styles';

export type ScheduleProps = {
  id: number;
  title: string;
  description?: string;
  date: Date;
  time: Date;
  status: string;
  user_id: number;
};

type Props = RectButtonProps & {
  data: ScheduleProps;
};

export function ScheduleCard({data, ...rest}: Props) {
  function getColor(status: string): string {
    const colors: any = {
      open: theme.colors.open,
      canceled: theme.colors.canceled,
      concluded: theme.colors.concluded,
    };

    return colors[status];
  }

  const {date, time, title, status} = data;

  return (
    <RectButton {...rest} style={styles.margin}>
      <View style={[styles.container, {backgroundColor: getColor(status)}]}>
        <View>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.dateBar}>
          <Text style={styles.dateBarText}>{date}</Text>
          <Text style={styles.dateBarText}>{time}</Text>
          <Text style={styles.dateBarText}>{status}</Text>
        </View>
      </View>
    </RectButton>
  );
}
