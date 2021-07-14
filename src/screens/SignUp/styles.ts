import {StyleSheet} from 'react-native';
import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingLeft: 40,
    paddingRight: 40,
  },
  image: {
    marginBottom: 48,
  },

  buttonBackSignIn: {
    marginTop: 16,
  },
  textBackSignIn: {
    color: '#000000',
  },
});
