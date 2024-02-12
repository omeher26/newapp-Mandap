

import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Modal, ScrollView } from 'react-native';
import { Card, IconButton, Searchbar } from 'react-native-paper';
// import AllMembersData from './AllMemD';
import AllMembersNewD from './AllMembersNewD';
import { useNavigation } from '@react-navigation/native';

const AllMembers = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const renderItem = ({ item, index }) => (
    <Card style={styles.card}>
      <TouchableOpacity onPress={() => handleMemberPress(item)}>
        <View style={styles.cardContent}>
          <View style={styles.leftContent}>
            <Text style={styles.nameText}>Name: {item.name}</Text>
            <Text style={styles.addressText}>Address: {item.address}</Text>
            <TouchableOpacity onPress={() => sendMessage(item)}>
              <Text style={styles.sendMessageText}>Send Message</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rightContent}>
            <Image style={styles.profileImage} source={{ uri: item.image }} />
          </View>
        </View>
      </TouchableOpacity>
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
    console.log(`Sending message to ${person.name}`);
  };

  const handleMemberPress = (member) => {
    setSelectedMember(member);
    navigation.navigate('MemberDetailScreen', { member });
  };

  const handleIconPress = (platform) => {
    console.log(`Icon pressed: ${platform}`);
  };

  const filteredAssociations = AllMembersNewD.filter((association) =>
    searchQuery
      ? association.name && association.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true
  );
  
  const sortedAssociations = filteredAssociations.sort((a, b) =>
   a.name.localeCompare(b.name));

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search associations"
        onChangeText={(query) => setSearchQuery(query)}
        value={searchQuery}
        style={styles.searchBar}
      />
      <FlatList
        // data={AllMembersData}
        data={sortedAssociations}
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
  searchBar: {
    marginTop: 10,
    marginBottom: 10,
  },
  card: {
    marginBottom: 16,
    padding:10
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContent: {
    flex: 1,
  },
  rightContent: {
    marginLeft: 16,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addressText: {
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
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  }
});

export default AllMembers;
