import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Alert, ActivityIndicator} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {ButtonLarge} from '../../components/ButtonLarge';
import {InputTextFieldLarge} from '../../components/InputTextFieldLarge';
import {Title} from '../../components/Tittle';
import {theme} from '../../global/styles/theme';
import {api} from '../../services/api';

import {format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {styles} from './styles';

export function Scheduler() {
  const navigation = useNavigation();
  const [datetime, setDatetime] = useState(new Date());
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleInputForm() {
    setLoading(true);
    try {
      const date = format(datetime, 'yyyy-MM-dd', {
        locale: ptBR,
      });
      const time = format(datetime, 'HH:mm:ss', {
        locale: ptBR,
      });
      const {data} = await api.post('schedules', {
        title,
        description,
        date,
        time,
      });
      if (data) {
        setLoading(false);
        Alert.alert(`${title} foi criada com sucesso!`);
        navigation.goBack();
      }
    } catch (error) {
      setLoading(false);
      Alert.alert(error.message);
    }
  }
  function handleBackButton() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <Title moveBack={() => handleBackButton()} title={'Novo Agendamento'} />
      <InputTextFieldLarge
        placeholder="Título"
        onChangeText={setTitle}
        value={title}
        maxLength={50}
      />
      <DatePicker
        date={datetime}
        minimumDate={new Date()}
        onDateChange={setDatetime}
        mode={'datetime'}
        locale={'pt-br'}
        is24hourSource={'locale'}
        minuteInterval={15}
        fadeToColor={theme.colors.background}
        androidVariant="nativeAndroid"
      />

      <InputTextFieldLarge
        placeholder="Descrição"
        multiline
        numberOfLines={4}
        onChangeText={setDescription}
        value={description}
        maxLength={150}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <ButtonLarge title={'Agendar'} onPress={() => handleInputForm()} />
      )}
    </View>
  );
}
