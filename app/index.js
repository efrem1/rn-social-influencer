import {startWalkThrough, startAuthenticate, startApp} from './app';
import {Navigation} from 'react-native-navigation';
import {storage} from 'storage';
import {registerScreens} from './screens';
import 'i18n';

registerScreens();

export function application() {
  const accessToken = storage.getString('accessToken') ?? null;
  const user = storage.getString('user') ?? null;
  Navigation.events().registerAppLaunchedListener(() => {
    if (!accessToken || !user) {
      return startAuthenticate();
    }
    return startApp();
  });
}
