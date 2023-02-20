import React, {createContext, useEffect, useReducer} from 'react';
import {useColorScheme} from 'react-native';
import {lightTheme, darkTheme, themeReducer, ThemeState} from './themeReducer';

type Props = {
  children: JSX.Element | JSX.Element[];
};

type ThemeContextPros = {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextPros);

export const ThemeProvider = ({children}: Props) => {
  // SET THEME BASED ON OS SETTINGS
  const colorScheme = useColorScheme();
  useEffect(() => {
    colorScheme === 'light' ? setLightTheme() : setDarkTheme();
  }, [colorScheme]);

  const [theme, dispatch] = useReducer(
    themeReducer,
    colorScheme === 'dark' ? darkTheme : lightTheme,
  );

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
    console.log('SET DARK THEME');
  };

  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
    console.log('SET LIGHT THEME');
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDarkTheme,
        setLightTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
