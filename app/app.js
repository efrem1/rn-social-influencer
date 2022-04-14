import {Navigation} from 'react-native-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {storage} from 'storage';
import {_package} from 'utils';
import {getThemeColors} from 'styles';

export function applyDefaultsOptions() {
  const theme = storage.getString('@theme') ?? 'light';
  const colors = getThemeColors(theme);
  Navigation.setDefaultOptions({
    layout: {
      componentBackgroundColor: colors.body,
    },
  });
}

applyDefaultsOptions();

export function startWalkThrough() {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: `${_package}.Walkthrough`,
            },
          },
        ],
      },
    },
  });
}

export function startAuthenticate() {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: `${_package}.Authenticate`,
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
}

export function startApp() {
  Promise.all([
    Ionicons.getImageSource('home-outline', 20, 'black'),
    Ionicons.getImageSource('home-outline', 20, 'black'),
    Ionicons.getImageSource('chatbox-ellipses-outline', 20, 'black'),
    Ionicons.getImageSource('person-outline', 20, 'black'),
  ]).then(([home, posts, inbox, profile]) => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: `${_package}.bottomTabId`,
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: `${_package}.Home`,
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    text: 'Campaigns',
                    icon: home,
                  },
                },
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: `${_package}.Posts`,
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    text: 'Posts',
                    icon: posts,
                  },
                },
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: `${_package}.Inbox`,
                      options: {
                        topBar: {
                          title: {
                            text: 'Inbox',
                          },
                        },
                      },
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    text: 'Inbox',
                    icon: inbox,
                  },
                },
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: `${_package}.Profile`,
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    text: 'Profile',
                    icon: profile,
                  },
                },
              },
            },
          ],
        },
      },
    });
  });
}
