import React from 'react';
import {StatusBar} from 'react-native';
import {theme} from './src/global/styles/theme';
import {Routes} from './src/routes';
import 'react-native-gesture-handler';
import {AuthProvider} from './src/hooks/auth';

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle="dark-content"
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
};

export default App;
