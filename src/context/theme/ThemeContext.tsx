import React, {createContext, useReducer} from 'react';
import {lightTheme, themeReducer, ThemeState} from './themeReducer';

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
  const [theme, dispatch] = useReducer(themeReducer, lightTheme);

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
