import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
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
    <View style={styles.container}>
      <Card>
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
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ProfileScreen;
