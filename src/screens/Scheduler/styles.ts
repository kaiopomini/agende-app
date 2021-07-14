import {StyleSheet} from 'react-native';
import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    flexDirection: 'column',
    paddingLeft: 40,
    paddingRight: 40,
    paddingVertical: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
