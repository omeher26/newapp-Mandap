// BODScreen.js

import React from 'react';
import { ScrollView, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { Card, Button } from 'react-native-paper';
import bodMembers from './BODdata';

const BODScreen = () => {
  

  return (
    <ScrollView style={styles.container}>
      {bodMembers.map((member, index) => (
        <Card key={index} style={styles.card}>
          {/* <ImageBackground style={styles.cover} source={{ uri: member.imageUrlb }}> */}
          <ImageBackground style={styles.cover}>
            <Image style={styles.profileImage} source={{ uri: member.imageUrl }} />
          </ImageBackground>
          <Card.Content>
            <Text style={styles.name}>{member.name}</Text>
            <Text style={styles.info}>{member.email}</Text>
            <Text style={styles.info}>{member.phoneNumber}</Text>
            <Text style={styles.info}>{member.address}</Text>
          </Card.Content>
          <Card.Actions>
            <Button icon="phone" onPress={() => console.log(`Contact ${member.name}`)}>
              Contact
            </Button>
            <Button icon="whatsapp" onPress={() => console.log('Whatsapp President')}>
              WhatsApp
            </Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  cover: {
    height: 110, // Adjust the height as needed
    justifyContent: 'flex-end',
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
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

export default BODScreen;
