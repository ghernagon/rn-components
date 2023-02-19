import React from 'react';
import {Alert, Button, View} from 'react-native';
import prompt from 'react-native-prompt-android';

import {HeaderTitle} from '../components/HeaderTitle';
import {appTheme} from '../theme/appTheme';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('Dismissed'),
      },
    );
  };

  const showAlertPrompt = () => {
    // THIS PROMPT ONLY WORKS ON IOS
    // Alert.prompt(
    //   'Alert Prompt Title',
    //   'My message',
    //   (value: string) => console.log('input value: ', value),
    //   'plain-text',
    //   'this is the default value',
    //   'number-pad',
    // );

    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  return (
    <View style={appTheme.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Show Alert" onPress={showAlert} />
      <View style={{height: 10}} />
      <Button title="Show Alert Prompt" onPress={showAlertPrompt} />
    </View>
  );
};
