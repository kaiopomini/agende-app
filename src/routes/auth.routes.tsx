import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../screens/Home';
import {Scheduler} from '../screens/Scheduler';
import {EditSchedule} from '../screens/EditSchedule';

const {Navigator, Screen} = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent',
        },
      }}>
      <Screen name="Home" component={Home} />
      <Screen name="Scheduler" component={Scheduler} />
      <Screen name="EditSchedule" component={EditSchedule} />
    </Navigator>
  );
}
