import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from './context';

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  return themeContext;
};

export const makeStyles =
  styles =>
  (props = {}) => {
    const {colors} = useTheme();
    const css = typeof styles === 'function' ? styles(colors, props) : styles;
    return StyleSheet.create(css);
  };
