import {StyleSheet} from 'react-native';
import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.reader,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  back: {
    marginRight: 24,
  },
});
