import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthRoutes} from './auth.routes';
import {SignInRoutes} from './signIn.routes';
import {useAuth} from '../hooks/auth';

export function Routes() {
  const {user} = useAuth();
  return (
    <NavigationContainer>
      {user.id ? <AuthRoutes /> : <SignInRoutes />}
    </NavigationContainer>
  );
}
