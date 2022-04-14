import React, {useEffect} from 'react';
import {StyleSheet, SectionList} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ProfileMenuItem, ProfileItemHeader} from 'components';
import {_package} from 'utils';

export const ProfileMenuScreen = ({componentId}) => {
  useEffect(() => {
    const navigationButtonListener =
      Navigation.events().registerNavigationButtonPressedListener(
        handleButtonPressed,
      );
    Ionicons.getImageSource('close-outline', 25, 'black').then(menu => {
      Navigation.mergeOptions(componentId, {
        topBar: {
          leftButtons: [
            {
              id: 'close',
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
    if (buttonId === 'close') {
      Navigation.pop(componentId);
    }
  }
  function renderItem({item, index}) {
    return <ProfileMenuItem {...item} componentId={componentId} />;
  }
  function renderSectionHeader({section: {title}}) {
    return <ProfileItemHeader title={title} />;
  }
  return (
    <SectionList
      style={styles.container}
      keyExtractor={item => item.title}
      sections={links}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
  },
});

const links = [
  {
    title: 'ACCOUNT SETTINGS',
    data: [
      {
        icon: 'person-outline',
        title: 'Personal Details',
        type: 'ionicon',
        action: `${_package}.PersonalDetail`,
        first: true,
      },
      {
        icon: 'wallet-outline',
        title: 'Payment Setup',
        type: 'ionicon',
        action: `${_package}.PaymentSetup`,
      },
      {
        icon: 'options-outline',
        title: 'Payment Preference',
        type: 'ionicon',
        action: `${_package}.PaymentPreference`,
        last: true,
      },
    ],
  },
  {
    title: 'SUPPORT',
    data: [
      {
        icon: 'chatbubble-outline',
        title: 'Chat With Us',
        type: 'ionicon',
        action: `${_package}.ChatWithUs`,
        first: true,
      },
      {
        icon: 'bulb-outline',
        title: 'Suggest a Feature',
        type: 'ionicon',
        action: `${_package}.SuggestFeature`,
      },
      {
        icon: 'people-outline',
        title: 'Creator Commnity',
        type: 'ionicon',
        action: `${_package}.Blog`,
      },
      {
        icon: 'person-outline',
        title: 'Blog',
        type: 'ionicon',
        action: `${_package}.Blog`,
      },
      {
        icon: 'help-buoy-outline',
        title: 'FAQs',
        type: 'ionicon',
        action: `${_package}.FAQs`,
      },
      {
        icon: 'help-buoy-outline',
        title: 'Help Center',
        type: 'ionicon',
        action: `${_package}.Help`,
      },
      {
        icon: 'information-circle-outline',
        title: 'Terms & Conditions',
        type: 'ionicon',
        action: `${_package}.TermsAndCondition`,
        last: true,
      },
    ],
  },
];
