import {application} from './app/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


Promise.all([Ionicons.loadFont(), MaterialIcons.loadFont()]).then(() => {
  application();
});
