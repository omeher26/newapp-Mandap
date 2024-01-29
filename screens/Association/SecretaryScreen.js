// SecretaryScreen.js

import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { Card, Button } from 'react-native-paper';

const SecretaryScreen = () => {
  const secretaryInfo = {
    name: 'Secretary Name',
    email: 'secretary@example.com',
    phoneNumber: '123-456-7890',
    address: '123 Secretary Street, City',
    imageUrl: 'https://www.shutterstock.com/image-photo/portrait-mature-indian-latin-business-260nw-2343004217.jpg', // Replace with the actual image URL
  };

  return (
    <View style={styles.container}>
      <Card>
        <ImageBackground style={styles.cover}>
          <Image style={styles.profileImage} source={{ uri: secretaryInfo.imageUrl }} />
        </ImageBackground>
        <Card.Content>
          <Text style={styles.name}>{secretaryInfo.name}</Text>
          <Text style={styles.info}>{secretaryInfo.email}</Text>
          <Text style={styles.info}>{secretaryInfo.phoneNumber}</Text>
          <Text style={styles.info}>{secretaryInfo.address}</Text>
        </Card.Content>
        <Card.Actions>
          <Button icon="phone" onPress={() => console.log('Contact Secretary')}>
            Contact
          </Button>
          <Button icon="whatsapp" onPress={() => console.log('Whatsapp President')}>
            WhatsApp
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  cover: {
    height: 200, // Adjust the height as needed
    justifyContent: 'flex-end',
    position: 'relative',
  },
  profileImage: {
    width: 150,
    height: 180,
    borderRadius: 50,
    position: 'absolute',
    bottom: 0,
    left: 16,
    borderWidth: 2,
    borderColor: 'white',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black', // Adjust text color for better visibility
  },
  info: {
    fontSize: 16,
    marginBottom: 4,
    color: 'black', // Adjust text color for better visibility
  },
});

export default SecretaryScreen;
