


// screens/SignupScreen.js

import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import DatePicker from 'expo-datepicker';
import { TextInput, Button, IconButton } from 'react-native-paper';


const SignupScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [gender, setGender] = useState('');
  // const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    // Ensure date is a valid Date object
    if (date instanceof Date && !isNaN(date)) {
      setSelectedDate(date);
    }
  };


  const navigation = useNavigation();


  const handleSignup = () => {
    // Handle signup logic
    console.log('Signup:', { firstName, lastName,email,password, age, maritalStatus, gender });
    navigation.navigate('Login')
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Logo */}
        <Image
          source={require("../assets/signupMandap.png")}
          style={styles.logo}
        />

        {/* First Name Input */}
        <TextInput
          label="First Name"
          mode="outlined"
          style={styles.input}
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />

        {/* Last Name Input */}
        <TextInput
          label="Last Name"
          mode="outlined"
          style={styles.input}
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />

        {/* Email Input */}
        <TextInput
          label="Email"
          mode="outlined"
          style={styles.input}
          value={email}
          onChange={(email) => setEmail(email)}
        />

        {/* date select */}
        <View>
          <Text>Select Birthdate:</Text>
          <DatePicker
            value={selectedDate}
            onChange={handleDateChange}
            mode="date"
            // display={Platform.OS === "ios" ? "spinner" : "calendar"}
            style={{ width: 300, marginBottom: 20 }}
          />
          {/* <Text>Selected Date: {selectedDate.toDateString()}</Text> */}
        </View>
        <View>
          <Text>Select Anniversary Date:</Text>
          <DatePicker
            value={selectedDate}
            onChange={handleDateChange}
            mode="date"
            // display={Platform.OS === "ios" ? "spinner" : "calendar"}
            style={{ width: 300, marginBottom: 20 }}
          />
          {/* <Text>Selected Date: {selectedDate.toDateString()}</Text> */}
        </View>

        {/* Password Input */}
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          style={styles.input}
          value={password}
          onChange={(password) => setPassword(password)}
        />

        {/* Age Input */}
        <TextInput
          label="Pancard No"
          mode="outlined"
          style={styles.input}
          keyboardType="numeric"
          value={age}
          onChangeText={(text) => setAge(text.replace(/[^0-9]/g, ""))}
        />

        {/* Marital Status and Gender Container */}
        <View style={styles.inlineContainer}>
          {/* <View style={styles.inlineItem}>
            <Text style={styles.label}>Marital Status</Text>
            <Picker
              selectedValue={maritalStatus}
              onValueChange={(value) => setMaritalStatus(value)}
              style={styles.input}
            >
              <Picker.Item
                label="Select Marital Status"
                value=" Select Status"
              />
              <Picker.Item label="Married" value="married" />
              <Picker.Item label="Unmarried" value="unmarried" />
            </Picker>
          </View> */}

          <View style={styles.inlineItem}>
            <Text style={styles.label}>Gender</Text>
            <Picker
              selectedValue={gender}
              onValueChange={(value) => setGender(value)}
              style={styles.input}
            >
              <Picker.Item label="Select Gender" value="Select Gender" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </View>
        </View>

        {/* Signup Button */}
        <Button mode="contained" style={styles.button} onPress={handleSignup}>
          Sign Up
        </Button>

        {/* OR Text */}
        {/* <Text style={styles.orText}>OR</Text> */}

        {/* Social Login Buttons */}
        {/* <View style={styles.socialButtons}>
          <IconButton
            icon="google"
            size={30}
            onPress={() => console.log("Google")}
          />
          <IconButton
            icon="facebook"
            size={30}
            onPress={() => console.log("Facebook")}
          />
          <IconButton
            icon="apple"
            size={30}
            onPress={() => console.log("Apple")}
          />
        </View> */}
      </View>
    </ScrollView>
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
  },
  input: {
    width: '100%',
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 4,
  },
  button: {
    width: '100%',
    marginVertical: 16,
  },
  orText: {
    marginVertical: 16,
    fontSize: 16,
    color: 'gray',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
  inlineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inlineItem: {
    flex: 1,
    marginHorizontal: 4,
  }
});

export default SignupScreen;
