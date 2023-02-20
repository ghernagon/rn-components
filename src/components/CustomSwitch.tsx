import React, {useContext, useState} from 'react';
import {Switch} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';

type Props = {
  isOn: boolean;
  onChange: (isEnabled: boolean) => void;
};

export const CustomSwitch = ({isOn, onChange}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: colors.primary}}
      thumbColor={isEnabled ? 'white' : ''}
      ios_backgroundColor="#D9D9DB"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
