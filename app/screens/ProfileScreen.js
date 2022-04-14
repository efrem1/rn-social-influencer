import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import {Text} from 'react-native-elements';
import {storage} from 'storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LoginManager} from 'react-native-fbsdk-next';
import {_package} from 'utils';
import {startAuthenticate} from '../app';

export const ProfileScreen = ({componentId}) => {
  useEffect(() => {
    const navigationButtonListener =
      Navigation.events().registerNavigationButtonPressedListener(
        handleButtonPressed,
      );
    Ionicons.getImageSource('menu-outline', 25, 'black').then(menu => {
      Navigation.mergeOptions(componentId, {
        topBar: {
          rightButtons: [
            {
              id: 'menu',
              icon: menu,
            },
          ],
          animate: true,
        },
      });
    });
    return () => {
      navigationButtonListener.remove(handleButtonPressed);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function handleButtonPressed({buttonId}) {
    if (buttonId === 'menu') {
      Navigation.push(componentId, {
        component: {
          name: `${_package}.ProfileMenu`,
        },
      });
    }
  }
  function logout() {
    LoginManager.logOut();
    storage.delete('accessToken');
    storage.delete('user');
    startAuthenticate();
  }
  const {firstName, lastName, fbImageURL} = JSON.parse(
    storage.getString('user'),
  );
  return (
    <View style={styles.container}>
      <View>
        <FastImage source={{uri: fbImageURL}} style={styles.profileImage} />
        <Text h3 style={styles.name}>{`${firstName} ${lastName}`}</Text>
        <Text>Connect your instagram account to set up your Portfolio.</Text>
      </View>
      <View>
        <Text h4>Social accounts</Text>
        <FastImage
          source={require('assets/socialaccount.png')}
          style={styles.socialaccount}
        />
      </View>
      <TouchableOpacity style={styles.logout} onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 150,
    alignSelf: 'center',
  },
  name: {
    textAlign: 'center',
  },
  logout: {
    alignSelf: 'center',
  },
  socialaccount: {
    width: 250,
    height: 300,
    alignSelf: 'center',
  },
});
