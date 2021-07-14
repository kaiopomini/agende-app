import {StyleSheet} from 'react-native';
import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    flexDirection: 'column',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 24,
    paddingBottom: 24,
  },
  searchBarContainer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBarText: {
    color: theme.colors.reader,
    fontSize: 20,
    textTransform: 'uppercase',
  },
  searchBarButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterBarContainer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  filterBarText: {
    color: theme.colors.green,
    fontSize: 12,
    textTransform: 'capitalize',
  },
  filterBarTextButton: {
    color: theme.colors.red,
    fontSize: 12,
    textTransform: 'uppercase',
  },
  filterBarButton: {
    marginLeft: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calendarIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  listView: {
    flex: 1,
    marginTop: 24,
  },

  modalView: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    width: '80%',
    marginVertical: '60%',
    backgroundColor: '#ddddddfa',
    elevation: 10,
    borderRadius: 16,
    flex: 1,
  },
  modalButtons: {
    display: 'flex',
    flexDirection: 'row',
  },
  modalButtonTextGreen: {
    color: theme.colors.green,
    fontSize: 20,
    textTransform: 'uppercase',
    marginHorizontal: 20,
  },
  modalButtonTextRed: {
    color: theme.colors.red,
    fontSize: 20,
    textTransform: 'uppercase',
    marginHorizontal: 20,
  },
});
