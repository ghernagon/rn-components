import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {NavigationController} from './src/navigation/NavigationController';

const App = () => {
  return (
    <NavigationContainer>
      {/* <SafeAreaView style={styles.container}> */}
      <NavigationController />
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
