import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Inbox} from 'components';

export const NotificationOptionsScreen = props => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          padding: 20,
        }}>
        Notification Options
      </Text>
      <Inbox.OptionsItem title="Clear all notifications" first />
      <Inbox.OptionsItem title="Mark all notification as read" />
      <Inbox.OptionsItem title="Open preferences" last />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
  },
});
