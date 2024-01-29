

// AssociationScreen.js
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Modal, Text, StyleSheet } from 'react-native';
import { IconButton, Searchbar } from 'react-native-paper';
import associationsData from './AssoData';

const AssociationsScreen = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const navigation = useNavigation();

  const detailScreen = () => {
    navigation.navigate('AssociationMainScreen')
  };

  

  const renderAssociationItem = ({ item ,index}) => (

    <TouchableOpacity
      style={styles.listItemContainer}
    //   onPress={() => navigation.navigate('AssociationDetails', { association: item })}
    onPress={() => handleListItemPress(item)}
    >
      <View style={styles.listItem}>
        <Text style={styles.title}>
            {/* <Text> {index+1}) </Text> */}
            <Text style={styles.titletext}> {item.title}</Text> 
        </Text>
        <Text style={styles.moreInfoArrow}>
            <IconButton style={styles.iconstyle} icon="arrow-right-circle-outline" buttonName='plus' size={25} />
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderModalContent = () => (
    <View style={styles.modalContent}>
      <View style={styles.closeIcon}>
        <TouchableOpacity onPress={closeModal} >
          <IconButton icon="close" size={30} />
        </TouchableOpacity>
      </View>
      <Text style={styles.modalTitle}>{selectedItem?.title}</Text>
      <Text style={styles.modalDescription}>{`Total Members: ${selectedItem?.members}`}</Text>
      <View style={styles.horizontalLine} />
      <View style={styles.venueContainer}>
        <IconButton style={styles.iconstyle} icon="map-marker" size={20} />
        <Text style={styles.venueText}>{`Address: ${selectedItem?.address}`}</Text>
      </View>
        {/* <Text style={styles.venueText}>{`Address: ${selectedItem?.venue}`}</Text> */}
      <View style={styles.venueContainer}>
        {/* <IconButton style={styles.iconstyle} icon="calendar-text" size={20} /> */}
        <IconButton style={styles.iconstyle} icon="" size={20} />
        <Text style={styles.modalDescription}>{`Pin Code: ${selectedItem?.pincode}`}</Text>
      </View>
      {/* <View style={styles.venueContainer}>
        <IconButton style={styles.iconstyle} icon="clock" size={20} />
        <Text style={styles.modalDescription}>{`Meeting Time: ${selectedItem?.time}`}</Text>
      </View> */}
      <TouchableOpacity onPress={() => detailScreen('AssociationMainScreen')}>
        <Text style={styles.viewDetailsButton}>View Association Details</Text>
      </TouchableOpacity>
    </View>
  );

  const filteredAssociations = associationsData.filter((association) =>
    searchQuery
      ? association.title && association.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true
  );
  const sortedAssociations = filteredAssociations.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const handleListItemPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  return (
    
    <View style={styles.container}>
      <Searchbar
        placeholder="Search associations"
        onChangeText={(query) => setSearchQuery(query)}
        value={searchQuery}
        style={styles.searchBar}
      />
      <FlatList
        data={sortedAssociations}
        keyExtractor={(item) => item.id}
        renderItem={renderAssociationItem}
        style={styles.flatList}
      />

      {/* Modal for displaying additional information */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          {renderModalContent()}
        </View>
      </Modal>
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
  listItemContainer: {
    marginVertical: 5,
  },
  listItem: {
    marginBottom: 8,
    backgroundColor:'#fff400',
    padding:20,
    borderRadius:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent:'center',
    elevation: 9,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  title:{
    fontSize:18,
    paddingTop:10,
  },
  titletext:{
    color:'black'
  },
  iconstyle:{
    fontSize:18,
    color:'green'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  // modalContent: {
  //   backgroundColor: 'white',
  //   padding: 16,
  //   borderRadius: 8,
  //   width: '80%',
  // },
  // modalTitle: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   marginBottom: 8,
  // },
  modalDescription: {
    fontSize: 16,
    marginBottom: 16,
  },
  // modalCloseButton: {
  //   color: 'blue',
  //   fontSize: 16,
  // },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 8,
  },
  venueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  venueText: {
    fontSize: 16,
    flex: 1,
  },
  iconstyle: {
    fontSize: 20,
    color: 'green',
  },
  viewDetailsButton: {
    color: 'blue',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
  },
  closeIcon: {
    color: 'red',
    alignSelf: 'flex-end',
    margin:-20,
  },
});

export default AssociationsScreen;

