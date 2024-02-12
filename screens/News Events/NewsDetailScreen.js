// NewsDetailScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const NewsDetailScreen = ({ route }) => {
  const { newsItem } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.newsTitle}>{newsItem.title}</Text>
      <Image source={{ uri: newsItem.imageUrl }} style={styles.newsImage} />
      <Text style={styles.newsContent}>{newsItem.content}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  newsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  newsImage: {
    width: '100%',
    height: 200, // Adjust the height as needed
    borderRadius: 8,
    marginBottom: 12,
  },
  newsContent: {
    fontSize: 18,
    color: '#555',
    lineHeight: 24,
  },
});

export default NewsDetailScreen;
