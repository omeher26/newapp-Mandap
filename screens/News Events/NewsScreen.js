// NewsScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const newsData = [
  { id: '1', title: 'News Title 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: '2', title: 'News Title 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: '3', title: 'News Title 3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: '4', title: 'News Title 4', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: '5', title: 'News Title 5', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: '6', title: 'News Title 6', content: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: '7', title: 'News Title 7', content: 'Integer in mauris eu nibh euismod gravida.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: '8', title: 'News Title 8', content: 'Duis ac tellus et risus vulputate vehicula.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: '9', title: 'News Title 9', content: 'Maecenas massa, semper in auctor a, volutpat a ligula.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: '10', title: 'News Title 10', content: 'Pellentesque tristique lobortis est, eu venenatis nisl.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: '11', title: 'News Title 11', content: 'Vivamus aliquet elit ac nisl ullamcorper dignissim.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  // Add more news items as needed
];

const NewsScreen = () => {
  const renderNewsItem = ({ item }) => (
    <View style={styles.newsCard}>
      <Text style={styles.newsTitle}>{item.title}</Text>
      <Text style={styles.newsContent}>{item.content}</Text>
    </View>
  );

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
});

export default NewsScreen;
