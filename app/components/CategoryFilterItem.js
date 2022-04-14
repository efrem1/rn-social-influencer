import React from 'react';
import {StyleSheet} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';

export const CategoryFilterItem = ({title, icon, type, first, last}) => {
  return (
    <ListItem
      bottomDivider={!last}
      style={styles.listItem(first, last)}
      containerStyle={styles.container(first, last)}>
      <Icon name={icon} type={type} size={25} color="black" />
      <ListItem.Content>
        <ListItem.Title>{title}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
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
