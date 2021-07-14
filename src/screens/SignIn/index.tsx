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

import {useAuth} from '../../hooks/auth';

import {styles} from './styles';
import IlustrationImg from '../../assets/agende-dark.png';
import {ButtonLarge} from '../../components/ButtonLarge';
import {InputTextFieldLarge} from '../../components/InputTextFieldLarge';

export function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {loading, signIn} = useAuth();

  async function handleSignIn() {
    try {
      await signIn(email, password);
    } catch (error) {
      Alert.alert(error.message);
    }
  }
  function handleSingUp() {
    navigation.navigate('SignUp');
  }

  return (
    <View style={styles.container}>
      <Image source={IlustrationImg} style={styles.image} />
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
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <ButtonLarge title="Entrar" onPress={handleSignIn} />
      )}

      <TouchableOpacity
        style={styles.buttonSignUp}
        activeOpacity={0.7}
        onPress={handleSingUp}>
        <Text style={styles.textSignUp}>Não tenho cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}
