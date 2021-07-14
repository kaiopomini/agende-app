import React, {useEffect, useState} from 'react';
import {Alert, Modal, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import RadioForm from 'react-native-simple-radio-button';
import {ButtonLarge} from '../../components/ButtonLarge';
import {ButtonLargeGhostRed} from '../../components/ButtonLargeGhostRed';
import {InputTextFieldLarge} from '../../components/InputTextFieldLarge';
import {Title} from '../../components/Tittle';
import {theme} from '../../global/styles/theme';
import {format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import addHours from 'date-fns/addHours';

import {styles} from './styles';
import {ScheduleProps} from '../../components/ScheduleCard';
import {api} from '../../services/api';

export function EditSchedule() {
  enum Status {
    canceled = 0,
    open = 1,
    concluded = 2,
  }

  function getNumStatus(valueStatus: string) {
    if (valueStatus === 'canceled') {
      return Status.canceled;
    }
    if (valueStatus === 'open') {
      return Status.open;
    }
    if (valueStatus === 'concluded') {
      return Status.concluded;
    }
  }

  const navigation = useNavigation();
  const route = useRoute();
  const schedule = route.params as ScheduleProps;
  const {id} = schedule;

  const [radioButton, setRadioButton] = useState(getNumStatus(schedule.status));
  const [status, setStatus] = useState('');
  const [datetime, setDatetime] = useState(
    addHours(getDate(schedule.date, schedule.time), 3),
  );
  const [title, setTitle] = useState(schedule.title);
  const [description, setDescription] = useState(schedule.description);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getStringStatus(radioButton);
  });

  function getStringStatus(valueStatus: any): void {
    if (valueStatus === 0) {
      setStatus('canceled');
      return;
    }
    if (valueStatus === 1) {
      setStatus('open');
      return;
    }
    if (valueStatus === 2) {
      setStatus('concluded');
      return;
    }
  }
  const radio_props = [
    {label: 'canceled', value: 0},
    {label: 'open', value: 1},
    {label: 'concluded', value: 2},
  ];
  function getDate(date: Date, time: Date): Date {
    const d = `${date}T${time}`;
    return new Date(d);
  }
  async function handleSave() {
    try {
      const date = format(datetime, 'yyyy-MM-dd', {
        locale: ptBR,
      });
      const time = format(datetime, 'HH:mm:ss', {
        locale: ptBR,
      });
      const {data} = await api.put(`schedules/${id}`, {
        title,
        description,
        date,
        time,
        status,
      });
      if (data) {
        Alert.alert(`${title} foi alterada com sucesso!`);
        navigation.goBack();
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  }
  async function handleDelete() {
    try {
      await api.delete(`schedules/${id}`);
      setModalVisible(false);
      Alert.alert(`${title} foi deletada com sucesso!`);
      navigation.goBack();
    } catch (error) {
      Alert.alert(error.message);
      setModalVisible(false);
    }
  }
  function handleBackButton() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <Title moveBack={() => handleBackButton()} title={'Editar Agendamento'} />
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
      <View style={styles.radioButtons}>
        <RadioForm
          radio_props={radio_props}
          initial={radioButton}
          onPress={value => setRadioButton(value)}
          formHorizontal={true}
          labelHorizontal={false}
          buttonColor={theme.colors.primary}
          labelColor={theme.colors.primary}
        />
      </View>

      <ButtonLarge title={'Salvar'} onPress={() => handleSave()} />
      <ButtonLargeGhostRed
        title={'Excluir Agendamento'}
        onPress={() => setModalVisible(true)}
      />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalView}>
          <View>
            <Text style={styles.deleteArea}>
              Deseja excluir esse agendamento?
            </Text>
            <View style={styles.modalButtonsArea}>
              <TouchableOpacity
                style={styles.modalButtonDelete}
                onPress={() => handleDelete()}
                activeOpacity={0.7}>
                <Text style={styles.modalButtonTextRed}>Excluir</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.modalButtonCloseModal}
                onPress={() => setModalVisible(false)}
                activeOpacity={0.7}>
                <Text style={styles.modalButtonTextWhite}>Voltar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
