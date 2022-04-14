import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CategoryFilterItem} from 'components';
import {Api} from '../api';
import {useTranslation} from 'react-i18next';

export const CampaignsFilterScreen = props => {
  const {t} = useTranslation();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    Ionicons.getImageSource('close-outline', 25).then(close => {
      Navigation.mergeOptions(props.componentId, {
        topBar: {
          rightButtons: [
            {
              id: 'close',
              icon: close,
            },
          ],
          leftButtons: [],
        },
      });
    });
    loadCategories();
    const btnPressedListener =
      Navigation.events().registerNavigationButtonPressedListener(
        handleButtonPressed,
      );
    return () => {
      btnPressedListener.remove(handleButtonPressed);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function loadCategories() {
    Api.get('/categories')
      .then(({data}) => {
        setCategories(
          data.map(i => ({
            title: t(i.key),
            id: i.id,
            icon: 'pin-outline',
            type: 'ionicon',
          })),
        );
      })
      .catch(error => {
        console.log(error);
      });
  }
  function handleButtonPressed({buttonId}) {
    if (buttonId === 'close') {
      Navigation.pop(props.componentId);
    }
  }
  function renderItem({item}) {
    return <CategoryFilterItem {...item} />;
  }
  return (
    <FlatList
      style={styles.container}
      data={[...filters, ...categories]}
      keyExtractor={item => item}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
  },
});

const filters = [
  {title: 'All', icon: 'pin-outline', type: 'ionicon', first: true},
  {title: 'New', icon: 'refresh-outline', type: 'ionicon'},
  {title: 'Invite Only', icon: 'pin-outline', type: 'ionicon'},
  {title: 'Brands-Fans', icon: 'star-outline', type: 'ionicon'},
  {title: 'Favourites', icon: 'heart-outline', type: 'ionicon'},
];
