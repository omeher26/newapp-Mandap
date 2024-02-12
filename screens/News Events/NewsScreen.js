import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import newsData from './NewsData';

const NewsScreen = () => {
  const navigation = useNavigation();

  const renderNewsItem = ({ item }) => {
    const truncatedContent = item.content.substring(0, 220); // Show only the first 20 characters
    const showMoreHandler = () => {
      // Navigate to the detailed news screen with the full content
      navigation.navigate('NewsDetails', { newsItem: item });
    };

    return (
      <View style={styles.newsCard}>
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text style={styles.newsContent}>{truncatedContent}...</Text>
        <TouchableOpacity onPress={showMoreHandler}>
          <Text style={styles.showMoreLink}>Show More</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={newsData}
        keyExtractor={(item) => item.id}
        renderItem={renderNewsItem}
        style={styles.newsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  newsList: {
    flex: 1,
  },
  newsCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  newsContent: {
    fontSize: 16,
    color: '#555',
  },
  showMoreLink: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 8,
  },
});

export default NewsScreen;
