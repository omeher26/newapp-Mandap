// NotificationTab.js
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Card, Title, Paragraph, Appbar, IconButton } from 'react-native-paper';

const NotificationScreen = ({ navigation }) => {
  // Fetch and display notifications from your data source
  const notifications = [
    { id: 1, type: 'News', message: 'New article published!' },
    { id: 2, type: 'Event', message: 'Upcoming community event!' },
    // Add more notifications as needed
  ];

  return (
    <View>
      <Appbar>
        {/* <IconButton icon="arrow-left" onPress={() => navigation.goBack()} /> */}
      </Appbar>
      {notifications.map((notification) => (
        <Card key={notification.id} style={{ margin: 10 }}>
          <Card.Content>
            <Title>{notification.type} Notification</Title>
            <Paragraph>{notification.message}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </View>
  );
};

export default NotificationScreen;
