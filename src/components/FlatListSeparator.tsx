import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';

export const FlatListSeparator = () => {
  const {
    theme: {dividerColor},
  } = useContext(ThemeContext);

  return (
    <View
      style={{...styles.menuItemSeparator, borderBottomColor: dividerColor}}
    />
  );
};

const styles = StyleSheet.create({
  menuItemSeparator: {
    borderBottomWidth: 1,
    opacity: 0.5,
    marginVertical: 8,
  },
});
