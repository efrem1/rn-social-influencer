import React, {useEffect, useRef, useMemo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  Dimensions,
  SafeAreaView,
  Platform,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import {Button} from 'react-native-elements';
import {ExpandingDot} from 'react-native-animated-pagination-dots';
import {
  Settings,
  AccessToken,
  LoginManager,
  AuthenticationToken,
  Profile,
} from 'react-native-fbsdk-next';
import {Api} from 'api';
import {storage} from 'storage';
import {startApp} from '../app';
const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

const {width} = Dimensions.get('window');
export const AuthenticateScreen = () => {
  const pager = useRef(null);
  const [loading, setLoading] = useState(false);
  const scrollOffsetAnimatedValue = useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = useRef(new Animated.Value(0)).current;
  const inputRange = [0, 3];
  const scrollX = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue,
  ).interpolate({
    inputRange,
    outputRange: [0, 3 * width],
  });
  const onPageScroll = useMemo(
    () =>
      Animated.event(
        [
          {
            nativeEvent: {
              offset: scrollOffsetAnimatedValue,
              position: positionAnimatedValue,
            },
          },
        ],
        {
          useNativeDriver: false,
        },
      ),
    [],
  );
  useEffect(() => {
    Settings.initializeSDK();
  }, []);
  async function onPressLogin() {
    setLoading(true);

    LoginManager.logInWithPermissions(
      ['public_profile', 'email'],
      'limited',
      'my_nonce',
    )
      .then(() => {
        if (Platform.OS === 'ios') {
          return AuthenticationToken.getAuthenticationTokenIOS();
        } else {
          return AccessToken.getCurrentAccessToken();
        }
      })
      .then(accesstoken => {
        storage.set('accessToken', `${accesstoken}`);
        return Profile.getCurrentProfile();
      })
      .then(user => {
        user.password = '12345';
        return Api.post('/users', user);
      })
      .then(({data}) => {
        if (data) {
          storage.set('user', JSON.stringify(data));
          startApp();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <AnimatedPagerView
        ref={pager}
        scrollEnabled={true}
        initialPage={0}
        onPageScroll={onPageScroll}
        style={styles.pagerView}>
        {pages.map((page, index) => {
          return (
            <View
              key={index}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={page.image} style={{width: 260, height: 240}} />
              <Text style={{textAlign: 'center', fontSize: 20}}>
                {page.title}
              </Text>
            </View>
          );
        })}
      </AnimatedPagerView>
      <ExpandingDot
        data={[1, 2, 3]}
        expandingDotWidth={30}
        scrollX={scrollX}
        inActiveDotOpacity={0.4}
        dotStyle={styles.dotStyle}
        containerStyle={styles.top30}
        activeDotColor="blue"
        inActiveDotColor="black"
      />

      <Button
        containerStyle={{marginHorizontal: 10, borderRadius: 10}}
        buttonStyle={{borderRadius: 10}}
        loading={loading}
        raised
        title="LOG IN WITH FACEBOOK"
        onPress={onPressLogin}
      />
      <View style={{alignItems: 'center', padding: 10}}>
        <Text>Log in to use Facebook, Instagram & Twitter accounts</Text>
        <Text>T&Cs and Privacy Policy</Text>
      </View>
    </SafeAreaView>
  );
};

const pages = [
  {
    title:
      'Got what it takes to craft pics and clips celebrating products you love?',
    image: require('assets/welcome/1.png'),
  },
  {
    title: "The world's biggest brands are waiting for your creativity.",
    image: require('assets/welcome/2.png'),
  },
  {
    title: 'Impress them and reap the rewards!',
    image: require('assets/welcome/3.png'),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
  },
  pagerView: {
    flex: 0.9,
  },
  dotStyle: {
    backgroundColor: 'white',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
