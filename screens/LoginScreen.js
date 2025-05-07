import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ setAuth }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    if (email === 'admin' && senha === '123') {
      await AsyncStorage.setItem('userToken', 'logado');
      setAuth(true);
    } else {
      Alert.alert('Erro', 'Credenciais inválidas');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Logo_GT.jpeg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Realize seu login!</Text>

      <Text style={styles.label}>Nome de usuário ou email</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu user ou email"
        placeholderTextColor="#a0a0a0"
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        placeholderTextColor="#a0a0a0"
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.cadastro}>
        Novo na GoodTicket? <Text style={styles.link}>Cadastrar</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    padding: 30,
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 80,
    alignSelf: 'center',
    marginBottom: 30,
  },
  title: {
    color: '#00E676',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    color: '#ccc',
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#2A2A2A',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#00E676',
    padding: 15,
    borderRadius: 25,
    marginTop: 30,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cadastro: {
    color: '#ccc',
    marginTop: 30,
    textAlign: 'center',
  },
  link: {
    color: '#00E676',
  },
});
