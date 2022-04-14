import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Navigation} from 'react-native-navigation';
import {View, StyleSheet} from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {_package} from 'utils';
import {Inbox} from 'components';

const PAGES = ['Notification', 'Messages'];
export const InboxScreen = ({componentId}) => {
  const [current, setCurrent] = useState(PAGES[0]);
  useEffect(() => {
    Ionicons.getImageSource('settings-outline', 25).then(settings => {
      Navigation.mergeOptions(componentId, {
        topBar: {
          rightButtons: [
            {
              id: 'settings',
              icon: settings,
            },
          ],
        },
      });
    });
    const btnPressedListener =
      Navigation.events().registerNavigationButtonPressedListener(
        handleButtonPressed,
      );
    return () => [btnPressedListener.remove(handleButtonPressed)];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function handleButtonPressed({buttonId}) {
    if (buttonId === 'settings') {
      Navigation.showModal({
        component: {
          name: `${_package}.NotificationOptions`,
        },
      });
    }
  }
  function renderNotification() {
    return <Inbox.Notifications />;
  }
  function renderMessages() {
    return <Inbox.Messages />;
  }
  function renderSegment() {
    switch (current) {
      case 'Notification':
        return renderNotification();
      case 'Messages':
        return renderMessages();
      default:
        return null;
    }
  }
  return (
    <View style={styles.container}>
      <SegmentedControl
        values={PAGES}
        selectedIndex={PAGES.indexOf(current)}
        onChange={({nativeEvent: {value}}) => {
          setCurrent(value);
        }}
      />
      {renderSegment()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
  },
});
