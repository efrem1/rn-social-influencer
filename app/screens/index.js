import React from 'react';
import {AuthenticateScreen} from './AuthenticateScreen';
import {BlogScreen} from './BlogScreen';
import {CampaignsFilterScreen} from './CampaignsFilterScreen';
import {CampaingsSearchScreen} from './CampaignsSearchScreen';
import {ChatWithUsScreen} from './ChatWithUsScreen';
import {FAQsScreen} from './FAQsScreen';
import {HelpCenter} from './HelpCenter';
import {HomeScreen} from './HomeScreen';
import {InboxScreen} from './InboxScreen';
import {NotificationOptionsScreen} from './NotificationsOptionsScreen';
import {PaymentPreferenceScreen} from './PaymentPreferenceScreen';
import {PaymentSetupScreen} from './PaymentSetupScreen';
import {PersonalDetailScreen} from './PersonalDetailScreen';
import {PostScreen} from './PostScreen';
import {PostsScreen} from './PostsScreen';
import {ProfileScreen} from './ProfileScreen';
import {ProfileMenuScreen} from './ProfileMenuScreen';
import {SuggestFeatureScreen} from './SuggestFeatureScreen';
import {TermsAndCondition} from './TermsAndCondition';
import {WalkThroughScreen} from './WalkthroughScreen';
import {_package} from 'utils';
import {ThemeProvider} from 'styles';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';

function registerScreen(name, Comp) {
  const Component = gestureHandlerRootHOC(Comp);
  Navigation.registerComponent(
    name,
    () => props =>
      (
        <ThemeProvider>
          <Component {...props} />
        </ThemeProvider>
      ),
    () => Component,
  );
}

export function registerScreens() {
  registerScreen(`${_package}.Authenticate`, AuthenticateScreen);
  registerScreen(`${_package}.Blog`, BlogScreen);
  registerScreen(`${_package}.CampaignsFilter`, CampaignsFilterScreen);
  registerScreen(`${_package}.CampaignsSearch`, CampaingsSearchScreen);
  registerScreen(`${_package}.ChatWithUs`, ChatWithUsScreen);
  registerScreen(`${_package}.FAQs`, FAQsScreen);
  registerScreen(`${_package}.Help`, HelpCenter);
  registerScreen(`${_package}.Home`, HomeScreen);
  registerScreen(`${_package}.Inbox`, InboxScreen);
  registerScreen(`${_package}.NotificationOptions`, NotificationOptionsScreen);
  registerScreen(`${_package}.PaymentPreference`, PaymentPreferenceScreen);
  registerScreen(`${_package}.PaymentSetup`, PaymentSetupScreen);
  registerScreen(`${_package}.PersonalDetail`, PersonalDetailScreen);
  registerScreen(`${_package}.Profile`, ProfileScreen);
  registerScreen(`${_package}.ProfileMenu`, ProfileMenuScreen);
  registerScreen(`${_package}.Post`, PostScreen);
  registerScreen(`${_package}.Posts`, PostsScreen);
  registerScreen(`${_package}.SuggestFeature`, SuggestFeatureScreen);
  registerScreen(`${_package}.TermsAndCondition`, TermsAndCondition);
  registerScreen(`${_package}.Walkthrough`, WalkThroughScreen);
}
