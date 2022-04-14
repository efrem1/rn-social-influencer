import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Messages = () => {
  return (
    <View style={styles.contaner}>
      <Text style={styles.title}>Messages</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
});
