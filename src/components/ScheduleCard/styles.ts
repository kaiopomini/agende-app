import {StyleSheet} from 'react-native';
import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
  margin: {
    marginTop: 16,
  },
  container: {
    width: '100%',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  dateBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  dateBarText: {
    color: theme.colors.reader,
    fontSize: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: theme.colors.reader,
  },
});
