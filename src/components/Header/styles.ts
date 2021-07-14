import {StyleSheet} from 'react-native';
import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 24,
  },
  greetingsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeetingsText: {
    fontSize: 24,
    color: theme.colors.reader,
  },
  greeetingsTextName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.reader,
  },
  logout: {
    flexDirection: 'row',
  },
  logoutIcon: {
    width: 24,
    height: 24,
  },
  calendar: {
    width: 160,
    height: 110,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    backgroundColor: theme.colors.primary,
    borderRadius: 24,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 54,
  },
});
