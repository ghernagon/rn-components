import React, {useState} from 'react';
import {Switch} from 'react-native';
import {colors} from '../theme/appTheme';

type Props = {
  isOn: boolean;
  onChange: (isEnabled: boolean) => void;
};

export const CustomSwitch = ({isOn, onChange}: Props) => {
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
