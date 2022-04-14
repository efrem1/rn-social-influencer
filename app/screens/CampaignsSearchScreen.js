import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Input} from 'components';

export const CampaingsSearchScreen = props => {
  const [keyword, setKeyword] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Input
          placeholder="Search Campaigns"
          value={keyword}
          onChangeText={setKeyword}
        />
        <Text style={styles.title}>CampaingsSearchScreen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
  },
});
