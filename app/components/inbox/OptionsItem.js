import React from 'react';
import {ListItem} from 'react-native-elements';
import {StyleSheet} from 'react-native';
export const OptionsItem = ({title, first, last}) => {
  return (
    <ListItem
      bottomDivider={!last}
      style={styles.listItem(first, last)}
      containerStyle={styles.container(first, last)}>
      <ListItem.Content>
        <ListItem.Title>{title}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  listItem: (first, last) => ({
    borderBottomRightRadius: last ? 15 : 0,
    borderBottomLeftRadius: last ? 15 : 0,
    borderTopLeftRadius: first ? 15 : 0,
    borderTopRightRadius: first ? 15 : 0,
  }),
  container: (first, last) => ({
    borderBottomRightRadius: last ? 15 : 0,
    borderBottomLeftRadius: last ? 15 : 0,
    borderTopLeftRadius: first ? 15 : 0,
    borderTopRightRadius: first ? 15 : 0,
  }),
});
