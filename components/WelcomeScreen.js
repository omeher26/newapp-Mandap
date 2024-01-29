// components/WelcomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';

const WelcomeScreen = ({ navigation }) => {
  const handleSignup = () => {
    // Navigate to the signup screen
    navigation.navigate('Signup');
  };

  const handleLogin = () => {
    // Navigate to the login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
       <Image source={require('../assets/associationMandap.png')} style={styles.logo} />
      <Text style={styles.title}>Mandap Community App</Text>
      <View style={styles.buttonContainer}>
        <Button mode="contained" style={styles.button} onPress={handleSignup}>
          Signup
        </Button>
        <Button mode="outlined" style={styles.button} onPress={handleLogin}>
          Login
        </Button>
      </View>
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
    width: 140, // Adjust the width as needed
    height: 170, // Adjust the height as needed
    marginBottom: 20,
    borderRadius: 60,
    objectFit:'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    width: '48%', // Adjust the width as needed
    marginVertical: 8,
  },
});

export default WelcomeScreen;
