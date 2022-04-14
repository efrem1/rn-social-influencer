import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Navigation} from 'react-native-navigation';
import {_package} from 'utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Api, SERVER_URL} from 'api';

export const HomeScreen = ({componentId}) => {
  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    Promise.all([
      Ionicons.getImageSource('search-outline', 25),
      Ionicons.getImageSource('menu-outline', 25),
    ]).then(([search, menu]) => {
      Navigation.mergeOptions(componentId, {
        topBar: {
          rightButtons: [
            {
              id: 'categories',
              icon: menu,
            },
            {
              id: 'search',
              icon: search,
            },
          ],
        },
      });
    });
    loadCampaigns();
    const navigationButtonPressedListener =
      Navigation.events().registerNavigationButtonPressedListener(
        handleButtonPressed,
      );
    return () => {
      navigationButtonPressedListener.remove(handleButtonPressed);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function loadCampaigns() {
    Api.get('/campaign?status=all')
      .then(({data}) => {
        setCampaigns(data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  function handleButtonPressed({buttonId}) {
    if (buttonId === 'search') {
      Navigation.push(componentId, {
        component: {
          name: `${_package}.CampaignsSearch`,
          options: {
            topBar: {
              visible: false,
            },
          },
        },
      });
    }

    if (buttonId === 'categories') {
      Navigation.push(componentId, {
        component: {
          name: `${_package}.CampaignsFilter`,
          options: {
            topBar: {
              title: {
                text: 'Categories',
              },
            },
          },
        },
      });
    }
  }
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          margin: 1,
          padding: 5,
          borderRadius: 5,
        }}>
        <FastImage
          source={{uri: `${SERVER_URL}/${item.coverImage}`}}
          style={styles.image}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.description}</Text>
      </View>
    );
  };
  return (
    <FlatList style={{padding: 5}} data={campaigns} renderItem={renderItem} />
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
    padding: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  subtitle: {
    fontSize: 14,
  },
});
