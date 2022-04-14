import React from 'react';
import {StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import {Navigation} from 'react-native-navigation';
import {_package} from 'utils';

export const PostListItem = ({title, first, last, componentId}) => {
  function openPost() {
    Navigation.push(componentId, {
      component: {
        name: `${_package}.Post`,
        options: {
          topBar: {
            title: {
              text: title,
            },
          },
        },
        passProps: {
          superId: 2,
          subId: 4,
        },
      },
    });
  }
  return (
    <ListItem
      onPress={openPost}
      bottomDivider={!last}
      style={styles.listItem(first, last)}
      containerStyle={styles.container(first, last)}>
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
