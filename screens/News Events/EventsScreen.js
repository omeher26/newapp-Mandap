// EventsScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card, Button, TextInput, IconButton } from 'react-native-paper';
import eventsData from './EventsD';


const EventsScreen = () => {
  const [commentingEventId, setCommentingEventId] = useState(null);
  const [events, setEvents] = useState(eventsData);

  const renderEventItem = ({ item }) => (
    <Card style={styles.eventCard}>
      <Card.Title title={item.title} />
      <Card.Content>
        <Text>{item.time}</Text>
        <Text>{item.venue}</Text>
      </Card.Content>

      {/* <Card.Actions>
        <Button icon="comment" onPress={() => handleCommentPress(item.id)}>
          Comments {item.comments.length}
        </Button>
        <Button icon="thumb-up" onPress={() => handleLikePress(item.id, item.likes)}>
          {item.likes} Likes
        </Button>
        <IconButton
          icon={commentingEventId === item.id ? 'chevron-up' : 'chevron-down'}
          onPress={() => handleToggleCommentSection(item.id)}
        />
      </Card.Actions> */}

      
      {/* Comments Section */}
      {commentingEventId === item.id && (
        <View style={styles.commentsSection}>
          <Text style={styles.commentsTitle}>Comments:</Text>
          <FlatList
            data={item.comments}
            keyExtractor={(comment) => `${item.id}-${comment.id}`}
            renderItem={({ item: comment }) => <Text>{comment.text}</Text>}
          />
          {/* Add TextInput for adding comments */}
          <TextInput
            label="Add a comment"
            value={item.newComment}  // You can bind this to a state variable
            onChangeText={(text) => handleCommentChange(item.id, text)}
            editable={true}
          />
          <Button onPress={() => handleCommentSubmit(item.id)}>Post Comment</Button>
        </View>
      )}
    </Card>
  );

  const handleCommentPress = (eventId) => {
    setCommentingEventId(eventId);
  };

  const handleLikePress = (eventId, currentLikes) => {
    // Implement logic to handle liking an event and updating the number of likes
    // For example, you might make an API call to update the likes
    console.log(`Like button pressed for event ${eventId}`);
    // Assuming you have a function to update the likes in your data
    // For demonstration purposes, increment the likes by 1
    const updatedEvents = events.map((event) =>
      event.id === eventId ? { ...event, likes: event.likes + 1 } : event
    );
    // Update the state or data with the new likes count
    // setEvents(updatedEventsData);
    setEvents(updatedEvents);
  };

  const handleCommentChange = (eventId, text) => {
    // Implement logic to handle comment text change
    console.log(`Comment text changed for event ${eventId}: ${text}`);
    const updatedEvents = events.map((event) =>
      event.id === eventId ? { ...event, newComment: text } : event
    );

    setEvents(updatedEvents);
  };

  const handleCommentSubmit = (eventId, text) => {
    // Implement logic to handle submitting a comment
    console.log(`Comment submitted for event ${eventId}`);
    // Assuming you have a function to update the comments in your data
    // For demonstration purposes, add a sample comment
    const updatedEvents = events.map((event,index) =>
      event.id === eventId
        ? {
            ...event,
            comments: [...event.comments, { id: 'newCommentId', text: event.newComment }],
            // Clear the newComment field
            newComment: '', 
          }
        : event
    );
    // Update the state or data with the new comment
    setEvents(updatedEvents);
    // Reset commentingEventId to null to close the comment section
    setCommentingEventId(null);
  };

  const handleToggleCommentSection = (eventId) => {
    // Toggle the comment section visibility
    setCommentingEventId((prevId) => (prevId === eventId ? null : eventId));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={renderEventItem}
        style={styles.eventsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  eventsList: {
    flex: 1,
  },
  eventCard: {
    marginBottom: 16,
  },
  commentsSection: {
    marginTop: 8,
  },
  commentsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default EventsScreen;
