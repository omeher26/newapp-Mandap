// BirthdayScreen.js

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import upcomingBirthdaysData from './celeBD';


const BirthdayScreen = () => {
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.nameText}>Name: {item.name}</Text>
        <Text style={styles.birthdateText}>Birthdate: {item.birthdate}</Text>
        <TouchableOpacity onPress={() => sendMessage(item)}>
          <Text style={styles.sendMessageText}>Send Message</Text>
        </TouchableOpacity>
      </Card.Content>
      <Card.Actions style={styles.iconContainer}>
        <IconButton
          icon="whatsapp"
          color="#25d366"
          size={25}
          onPress={() => handleIconPress('whatsapp')}
        />
        <IconButton
          icon="instagram"
          color="#E4405F"
          size={25}
          onPress={() => handleIconPress('instagram')}
        />
        <IconButton
          icon="facebook"
          color="#4267B2"
          size={25}
          onPress={() => handleIconPress('facebook')}
        />
      </Card.Actions>
    </Card>
  );

  const sendMessage = (person) => {
    // Implement logic to send messages via WhatsApp, Instagram, and Facebook
    console.log(`Sending message to ${person.name}`);
  };

  const handleIconPress = (platform) => {
    // Implement logic for handling icon presses
    console.log(`Icon pressed: ${platform}`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={upcomingBirthdaysData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.flatlist}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  birthdateText: {
    fontSize: 16,
  },
  sendMessageText: {
    color: 'blue',
    marginTop: 8,
  },
  flatlist: {
    marginBottom: 16,
  },
  iconContainer: {
    justifyContent: 'flex-end',
  },
});

export default BirthdayScreen;
