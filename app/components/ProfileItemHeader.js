import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const ProfileItemHeader = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    padding: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
