// screens/SignupScreen.js

import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import DatePicker from "expo-datepicker";
import { TextInput, Button, IconButton, Icon } from "react-native-paper";
import DateField, {
  MonthDateYearField,
  YearMonthDateField,
} from "react-native-datefield";
import moment from "moment";
import  DateTimePicker  from "@react-native-community/datetimepicker";

const SignupScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [gender, setGender] = useState("");
  const [business, setBusiness] = useState("");
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
    console.log("Signup:", {
      firstName,
      lastName,
      email,
      password,
      age,
      maritalStatus,
      gender,
    });
    navigation.navigate("Login");
  };




  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [inputDate, setInputDate] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
    setInputDate(currentDate.toDateString()); // Format date as a string
  };

  const showMode = () => {
    setShowDatePicker(true);
  };

  const showDatePickerHandler = () => {
    showMode('date');
  };



  const [dateA, setDateA] = useState(new Date());
  const [showDatePickerA, setShowDatePickerA] = useState(false);
  const [inputDateA, setInputDateA] = useState('');

  const onChangeA = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePickerA(Platform.OS === 'ios');
    setDateA(currentDate);
    setInputDateA(currentDate.toDateString()); // Format date as a string
  };

  const showModeA = () => {
    setShowDatePickerA(true);
  };

  const showDatePickerHandlerA = () => {
    showModeA('date');
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
          label="Business Owner Name"
          mode="outlined"
          style={styles.input}
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />

        {/* <MonthDateYearField
  styleInput={styles.inputBorder}
  onSubmit={(value) => console.log('MonthDateYearField', value)}
/>

<YearMonthDateField
  styleInput={styles.inputBorder}
  onSubmit={(value) => console.log('YearMonthDateField', value)}
/> */}

        {/* Last Name Input */}
        <TextInput
          label="Business Name"
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
        <View style={styles.dateContainer}>
          <Text style={styles.dateLabel}>Select Birthdate:</Text>
          {/* <DateField
            labelDate="Enter date"
            labelMonth="Enter month"
            labelYear="Enter year"
            defaultValue={new Date()}
            styleInput={styles.inputBorder}
            onSubmit={(value) => console.log(value)}
          /> */}



          {/* <View> */}
            <View style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-between' }}>
              <TextInput
                style={{
                  width: '80%',
                  marginVertical: 8,
                }}
                placeholder="Selected Date"
                mode="outlined"
                value={inputDate} // Bind the input field value to the state
                editable={false} // Disable editing
              />
              {showDatePicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
              <TouchableOpacity onPress={showDatePickerHandler} style={{ backgroundColor: '#efefef', width: '12%', marginVertical: 8, backgroundColor: '#6544b3', borderRadius: 5,justifyContent:'center' }}>
                <Text style={{ color: '#ffffff', textAlign: 'center' }}>Date</Text>
              </TouchableOpacity>
            </View>
          {/* </View> */}
        </View>


        <View style={styles.dateContainer}>
          <Text style={styles.dateLabel}>Select Anniversary Date:</Text>
          {/* <DateField
            labelDate="Enter date"
            labelMonth="Enter month"
            labelYear="Enter year"
            defaultValue={new Date()}
            styleInput={styles.inputBorder}
            onSubmit={(value) => console.log(value)}
          /> */}

          <View style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-between' }}>

            <TextInput
              style={{
                width: '80%',
                marginVertical: 8,
              }}
              placeholder="Selected Date"
              mode="outlined"
              value={inputDateA} // Bind the input field value to the state
              editable={false} // Disable editing
            />
            {showDatePickerA && (
              <DateTimePicker
                testID="dateTimePicker"
                value={dateA}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onChangeA}
              />
            )}
            <TouchableOpacity onPress={showDatePickerHandlerA} style={{ backgroundColor: '#efefef', width: '12%', marginVertical: 8, backgroundColor: '#6544b3', borderRadius: 5,justifyContent:'center' }}>
              <Text style={{ color: '#ffffff', textAlign: 'center' }}>Date</Text>
            </TouchableOpacity>
            {/* <Button mode="contained" style={{width: '10%', marginVertical: 8,}} onPress={showDatePickerHandlerA} title="Date" /> */}

          </View>
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

        {/* Pancard Input */}
        <TextInput
          label="Pancard No"
          mode="outlined"
          style={styles.input}
          value={age}
          onChangeText={(text) => setAge(text)}
        />

        {/* Business name */}
        {/* <TextInput
          label='Business Name'
          mode="outlined"
          style={styles.input}
          value={business}
          onChangeText={(text) => setBusiness(text)}
        /> */}

        {/* Gender Container */}
        <View style={styles.inlineContainer}>
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
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
  },
  logo: {
    height: 120,
    width: 120,
    margin: 20,
  },
  input: {
    width: "100%",
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 4,
  },
  button: {
    width: "100%",
    marginVertical: 16,
  },
  orText: {
    marginVertical: 16,
    fontSize: 16,
    color: "gray",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
  },
  inlineContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inlineItem: {
    flex: 1,
    marginHorizontal: 4,
  },
  inputBorder: {
    width: "30%",
    borderRadius: 8,
    borderColor: "#cacaca",
    borderWidth: 1.5,
    marginBottom: 10,
    padding: 5,
  },
  dateContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 5,
    marginLeft: -18,
  },
  dateLabel: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default SignupScreen;
