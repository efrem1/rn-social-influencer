import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const LoginButton = ({title, onPress, backgroundColor, color}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    width: '80%',
    borderRadius: 52,
    backgroundColor: 'blue',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
