import 'react-native-gesture-handler';
import React from 'react';
import {NavigationController} from './src/navigation/NavigationController';
import {ThemeProvider} from './src/context/theme/ThemeContext';

const App = () => {
  return (
    <AppState>
      <NavigationController />
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
