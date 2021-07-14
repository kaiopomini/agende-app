import {StyleSheet} from 'react-native';
import {theme} from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    flexDirection: 'column',
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 40,
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  radioButtons: {
    marginTop: 16,
  },
  modalView: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    width: '80%',
    marginVertical: '60%',
    backgroundColor: '#ddddddee',
    borderRadius: 16,
    flex: 1,
  },
  modalButtonsArea: {
    marginTop: 24,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalButtonTextRed: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#cc2222',
    textTransform: 'uppercase',
  },
  modalButtonTextWhite: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  deleteArea: {
    color: theme.colors.reader,
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  modalButtonDelete: {
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    width: 124,
    height: 48,
    borderRadius: 16,
    marginTop: 16,
    marginRight: 8,
    elevation: 5,
  },
  modalButtonCloseModal: {
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: 124,
    height: 48,
    borderRadius: 16,
    marginTop: 16,
    elevation: 5,
    marginLeft: 8,
  },
});
