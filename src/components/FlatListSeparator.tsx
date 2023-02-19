import React from 'react';
import {StyleSheet, View} from 'react-native';

export const FlatListSeparator = () => {
  return <View style={styles.menuItemSeparator} />;
};

const styles = StyleSheet.create({
  menuItemSeparator: {
    borderBottomWidth: 1,
    opacity: 0.5,
    marginVertical: 8,
  },
});
