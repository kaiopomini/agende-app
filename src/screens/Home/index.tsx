import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  Alert,
} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import {Header} from '../../components/Header';

import {styles} from './styles';
import CalendarIcon from '../../assets/calendar-icon.png';
import {ScheduleCard, ScheduleProps} from '../../components/ScheduleCard';
import {theme} from '../../global/styles/theme';
import {useAuth} from '../../hooks/auth';
import {api} from '../../services/api';
import {format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function Home() {
  const isFocused = useIsFocused();
  const [shedules, setSchedules] = useState<ScheduleProps[]>([]);
  const [query, setQuery] = useState<string>('');
  useEffect(() => {
    async function fetchMyAPI(queryValue: string = '') {
      try {
        const route = queryValue ? `schedules?date=${queryValue}` : 'schedules';
        const data = await api.get(route);
        setSchedules(data.data);
      } catch (error) {}
    }
    if (isFocused) {
      fetchMyAPI(query);
    }
  }, [query, isFocused]);
  const [modalVisible, setModalVisible] = useState(false);
  const [datetime, setDatetime] = useState(new Date());
  const navigation = useNavigation();
  const {user, signOut} = useAuth();

  function handleAddSchedule() {
    navigation.navigate('Scheduler');
  }
  function handleEditSchedule(item: ScheduleProps) {
    navigation.navigate('EditSchedule', item);
  }
  function handleRemoveQuery() {
    setQuery('');
    setModalVisible(!modalVisible);
  }
  function handleSetQuery() {
    const queryDate = format(datetime, 'yyyy-MM-dd', {
      locale: ptBR,
    });
    setQuery(queryDate);

    setModalVisible(!modalVisible);
  }
  function handleSignOut() {
    Alert.alert('Logout', 'Deseja Sair?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => {
          signOut();
        },
      },
    ]);
  }
  return (
    <View style={styles.container}>
      <Header
        name={user.firstName}
        addSchedule={() => handleAddSchedule()}
        logOut={() => handleSignOut()}
      />
      <View style={styles.searchBarContainer}>
        <Text style={styles.searchBarText}>Agendamentos</Text>
        <TouchableOpacity
          style={styles.searchBarButton}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.searchBarText}>Filtrar</Text>
          <Image style={styles.calendarIcon} source={CalendarIcon} />
        </TouchableOpacity>
      </View>
      {query ? (
        <View style={styles.filterBarContainer}>
          <Text style={styles.filterBarText}>filtro: {query}</Text>
          <TouchableOpacity
            style={styles.filterBarButton}
            onPress={() => setQuery('')}>
            <Text style={styles.filterBarTextButton}>Remover</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}

      <View style={styles.listView}>
        <FlatList
          data={shedules}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <ScheduleCard
              data={item}
              onPress={() => handleEditSchedule(item)}
            />
          )}
        />
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalView}>
          <DatePicker
            date={datetime}
            onDateChange={setDatetime}
            mode={'date'}
            locale={'pt-br'}
            is24hourSource={'locale'}
            minuteInterval={15}
            fadeToColor={theme.colors.background}
            androidVariant="nativeAndroid"
          />
          <View style={styles.modalButtons}>
            <TouchableOpacity onPress={() => handleRemoveQuery()}>
              <Text style={styles.modalButtonTextRed}>Remover</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSetQuery()}>
              <Text style={styles.modalButtonTextGreen}>Filtrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
