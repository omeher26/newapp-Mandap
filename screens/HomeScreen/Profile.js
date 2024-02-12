import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { Card, Button, TextInput } from 'react-native-paper';

const ProfileScreen = () => {
  const navigation = useNavigation()
  const [editable, setEditable] = useState(false);
  const [profileInfo, setProfileInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    address: '123 President Street, City',
    birthdate: 'January 1, 1990',
    anniversary: 'February 14, 2010',
    associationName: 'Sample Association',
    imageUrl: 'https://www.tatatrusts.org/images/Ratan_N_Tata_sm.jpg',
    aadhar:'1234 5678 9632',
    pan:'ALSAC2543Y',
  });

  const handleEditToggle = () => {
    setEditable(!editable);
  };

  const handleSaveChanges = () => {
    // Add logic to save changes to backend or update state
    console.log('Changes saved:', profileInfo);
    setEditable(false);
  };

  const handleChange = (field, value) => {
    setProfileInfo((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
  };

  const handleLogoutPress = () => {
    // Navigate to the profile screen
    navigation.navigate('Login');
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <ImageBackground style={styles.cover}>
          <Image style={styles.profileImage} source={{ uri: profileInfo.imageUrl }} />
        </ImageBackground>
        <Card.Content>
          <Text style={styles.name}>{profileInfo.name}</Text>
          <TextInput
            label="Email"
            value={profileInfo.email}
            onChangeText={(text) => handleChange('email', text)}
            editable={editable}
          />
          <TextInput
            label="Phone Number"
            value={profileInfo.phoneNumber}
            onChangeText={(text) => handleChange('phoneNumber', text)}
            editable={editable}
          />
          <TextInput
            label="Address"
            value={profileInfo.address}
            onChangeText={(text) => handleChange('address', text)}
            editable={editable}
          />
          <TextInput
            label="Birthdate"
            value={profileInfo.birthdate}
            onChangeText={(text) => handleChange('birthdate', text)}
            editable={editable}
          />
          <TextInput
            label="Anniversary"
            value={profileInfo.anniversary}
            onChangeText={(text) => handleChange('anniversary', text)}
            editable={editable}
          />
          <TextInput
            label="Association Name"
            value={profileInfo.associationName}
            onChangeText={(text) => handleChange('associationName', text)}
            editable={editable}
          />
          <TextInput
            label="Aadhar Card Number"
            value={profileInfo.aadhar}
            onChangeText={(text) => handleChange('aadhar', text)}
            editable={editable}
          />
          <TextInput
            label="Pan Card Number"
            value={profileInfo.pan}
            onChangeText={(text) => handleChange('pan', text)}
            editable={editable}
          />
        </Card.Content>
        <Card.Actions style={styles.cardActions}>
          {!editable ? (
            <Button icon="pencil" onPress={handleEditToggle}>
              Edit
            </Button>
          ) : (
            <Button icon="check" onPress={handleSaveChanges}>
              Save
            </Button>
          )}
          <Button icon="logout" onPress={handleLogoutPress}>
            Logout
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    padding: 16,
    marginBottom:10,
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
    color: 'black', 
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card:{
    marginBottom:40,
  }
});

export default ProfileScreen;
