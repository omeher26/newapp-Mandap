// LoginScreen.js
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, IconButton, Text } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialIcons';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation()

  const handleLogin = ( ) => {
    // Handle login logic
    console.log('Login:', { email, password });
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
       {/* Logo */}
       <Image
          source={require("../assets/signupMandap.png")}
          style={styles.logo}
        />

      {/* Email Input */}
      <TextInput
        label="Email"
        mode="outlined"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        left={<TextInput.Icon name="email" />}
      />

      {/* Password Input */}
      <TextInput
        label="Password"
        mode="outlined"
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        left={<TextInput.Icon name="lock" />}
      />

      {/* Login Button */}
      <Button mode="contained" style={styles.button} onPress={handleLogin}>
        Login
      </Button>

      {/* OR Text */}
      {/* <Text style={styles.orText}>OR</Text> */}

      {/* Social Login Buttons */}
      {/* <View style={styles.socialButtons}>
        <IconButton icon="google" size={30} onPress={() => console.log('Google')} />
        <IconButton icon="facebook" size={30} onPress={() => console.log('Facebook')} />
        <IconButton icon="apple" size={30} onPress={() => console.log('Apple')} />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor:'white'
  },
  logo: {
    height:120,
    width:120,
    margin:20,
    top:-40,
  },
  input: {
    width: '100%' ,
    marginVertical: 8,
  },
  button: {
    width: '100%' ,
    marginVertical: 8,
  },
  orText: {
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default LoginScreen;
