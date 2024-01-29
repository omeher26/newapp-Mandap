// PresidentScreen.js

import React from 'react';
import { View, Text, Image, StyleSheet,ImageBackground } from 'react-native';
import { Card, Button, IconButton } from 'react-native-paper';

const PresidentScreen = () => {
  const presidentInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    address: '123 President Street, City',
    imageUrl: 'https://www.tatatrusts.org/images/Ratan_N_Tata_sm.jpg',
  };

  return (
    <View style={styles.container}>
      <Card>
        {/* <ImageBackground style={styles.cover} source={{ uri: presidentInfo.imageUrl }}> */}
        <ImageBackground style={styles.cover}>
          <Image style={styles.profileImage} source={{ uri: presidentInfo.imageUrl }} />
        </ImageBackground>
        <Card.Content>
          <Text style={styles.name}>{presidentInfo.name}</Text>
          <Text style={styles.info}>{presidentInfo.email}</Text>
          <Text style={styles.info}>{presidentInfo.phoneNumber}</Text>
          <Text style={styles.info}>{presidentInfo.address}</Text>
        </Card.Content>
        <Card.Actions>
          <Button icon="phone" onPress={() => console.log('Contact President')}>
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
    borderRadius: 40,
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

export default PresidentScreen;



