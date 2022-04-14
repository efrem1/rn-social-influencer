import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const PersonalDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PersonalDetailScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
});
