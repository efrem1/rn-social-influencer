import React, {useState} from 'react';
import {ThemeContext} from './context';
import {getThemeColors} from './themes';
import {storage} from 'storage';

export function ThemeProvider({children, theme}) {
  const [themeState, setThemeState] = useState(theme);
  const changeTheme = _theme => {
    setThemeState(_theme);
    storage.set('@theme', _theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        colors: getThemeColors(themeState),
        name: themeState,
        changeTheme: changeTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
}
