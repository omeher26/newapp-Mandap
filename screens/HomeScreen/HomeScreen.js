// HomeScreen.js
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Appbar, IconButton } from 'react-native-paper';

const HomeScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleProfilePress = () => {
    // Navigate to the profile screen
    navigation.navigate('Profile');
  };

  // const handleButtonPress = (buttonName) => {
  //   // Handle button press logic
  //   console.log(`Button pressed: ${buttonName}`);
  // };

  const handleAssociationsPress = () => {
    // Navigate to AssociationsScreen
    navigation.navigate('Associations');
  };

  const handleNewsEventPress = () => {
    // Navigate to NewsScreen
    navigation.navigate('NewsEvent');
  };

  const handleNotificationPress = () => {
    navigation.navigate('Notification');
  };
  const handleCelebrationPress = () => {
    navigation.navigate('Celebration');
  };

  const handleAllMemberPress = () => {
    navigation.navigate('AllMembers');
  };
  const handleInfoLeaderPress = () => {
    navigation.navigate('InfoLeaderMainScreen');
  };


  return (
    <ScrollView style={styles.container}>
      <Appbar style={styles.appbar}>
        {/* Your Appbar content here */}
        <Appbar.Content title="Home" />
        {/* Profile icon */}
        <IconButton icon="account-circle" size={30} onPress={handleProfilePress} />
      </Appbar>

      {/* First Row */}
      <View style={styles.buttonRow}>

        <TouchableOpacity
          mode="contained"
          style={styles.icons}
          onPress={()=> handleAssociationsPress('Associations')}
        >
          <IconButton icon="account-group" buttonName='plus' size={50} iconColor='#db1f37'/>
          <Text >Associations</Text>          
        </TouchableOpacity>

        <TouchableOpacity
          mode="contained"
          style={styles.icons}
          onPress={() => handleNewsEventPress('NewsEvent')}
        >
          <IconButton icon="newspaper-variant" buttonName='plus' size={50} iconColor='#db1f37' />
          <Text >News and Events</Text>
        </TouchableOpacity>
      </View>


      {/* Second Row */}
      <View style={styles.buttonRow}>

        <TouchableOpacity style={styles.icons} onPress={() => handleNotificationPress('Events')}>
            <IconButton icon="calendar-text" buttonName='plus' size={50} iconColor='#db1f37' />
            <Text >Notification</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icons} onPress={() => handleCelebrationPress('Celebrations')}>
           <IconButton icon="party-popper" buttonName='plus' size={50} iconColor='#db1f37' />
           <Text >Celebration</Text>
        </TouchableOpacity>

      </View>


      {/* Third Row */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          mode="contained"
          style={styles.icons}
          onPress={() => handleInfoLeaderPress('InfoLeaderMainScreen')}
        >
           <IconButton icon="account-tie" buttonName='plus' size={50} iconColor='#db1f37' />
           <Text >Info of Leaders</Text>          
        </TouchableOpacity>

        <TouchableOpacity
          mode="contained"
          style={styles.icons}
          onPress={() => handleAllMemberPress('AllMembers')}
        >
           <IconButton icon="account-search" buttonName='plus' size={50} iconColor='#db1f37' />
           <Text >Member Search</Text>          
        </TouchableOpacity>
      </View>


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'white'
  },
  appbar: {
    backgroundColor: 'white', // Set the background color of the appbar
    paddingLeft: 16, // Adjust the left padding
    paddingRight: 16, // Adjust the right padding
    marginTop: 20, // Adjust the top margin
    marginBottom: 10, // Adjust the bottom margin
  },
  icons:{
    flex:1,
    backgroundColor:'#fff400',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    height:180,
    margin:10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    flex: 1,
    height:180,
    width:40,
    justifyContent:'center',
    alignItems:'center',
    margin:10
  }
});

export default HomeScreen;
