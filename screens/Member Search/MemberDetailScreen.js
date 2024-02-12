import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const MemberDetailScreen = ({ route }) => {
  const { member } = route.params;
  const navigation = useNavigation()

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.memberImage} source={{ uri: member.image }} />
      </View>
      <View style={styles.detailsContainer}>
        {renderDetail('Name', member.name)}
        {renderDetail('Address', member.address)}
        {renderDetail('Business Name', member.business_name)}
        {renderDetail('Member ID', member.member_number)}
        {renderDetail('Phone Number', member.phone_number)}
        {renderDetail('Birthdate', member.birthdate)}
        {renderDetail('Email', )}
      </View>

    </ScrollView>
  );
};

const renderDetail = (key, value) => (
  <View style={styles.detailItem}>
    <Text style={styles.detailKey}>{key}:</Text>
    <Text style={styles.detailValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  memberImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  detailsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  detailKey: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  detailValue: {
    fontSize: 16,
  },
  goBackButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 20,
    alignItems: 'center',
  },
  goBackButtonText: {
    color: 'white',
    fontSize: 16,
  },
});



export default MemberDetailScreen;
