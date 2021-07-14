import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import IlustrationImg from '../../assets/agende-dark.png';
import {ButtonLarge} from '../../components/ButtonLarge';
import {InputTextFieldLarge} from '../../components/InputTextFieldLarge';
import {api} from '../../services/api';

export function SignUp() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password2, setPassword2] = useState('');
  const navigation = useNavigation();
  async function handleCreateAccount() {
    setLoading(true);
    try {
      const {data} = await api.post('users', {
        firstName,
        lastName,
        email,
        password,
        password2,
      });
      if (data) {
        setLoading(false);
        Alert.alert(`${firstName}, sua conta foi criada com sucesso!`);
        navigation.navigate('SignIn');
      }
    } catch (error) {
      setLoading(false);
      Alert.alert(error.message);
    }
  }

  function handleBackSignIn() {
    navigation.navigate('SignIn');
  }

  return (
    <View style={styles.container}>
      <Image source={IlustrationImg} style={styles.image} />
      <InputTextFieldLarge
        placeholder="Nome"
        textContentType="name"
        onChangeText={setFirstName}
        value={firstName}
      />
      <InputTextFieldLarge
        placeholder="Sobrenome"
        textContentType="familyName"
        onChangeText={setLastName}
        value={lastName}
      />
      <InputTextFieldLarge
        placeholder="Email"
        textContentType="username"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />
      <InputTextFieldLarge
        placeholder="Senha"
        textContentType="password"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <InputTextFieldLarge
        placeholder="Confirmar Senha"
        textContentType="password"
        secureTextEntry={true}
        onChangeText={setPassword2}
        value={password2}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <ButtonLarge title="Criar conta" onPress={handleCreateAccount} />
      )}

      <TouchableOpacity
        style={styles.buttonBackSignIn}
        activeOpacity={0.7}
        onPress={handleBackSignIn}>
        <Text style={styles.textBackSignIn}>Já sou cadastrado</Text>
      </TouchableOpacity>
    </View>
  );
}
