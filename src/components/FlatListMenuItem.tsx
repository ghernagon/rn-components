import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {MenuItem} from '../interfaces/interfaces';
import {colors} from '../theme/appTheme';

type Props = {
  menuItem: MenuItem;
};

export const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.component)}>
      <View style={styles.menuItemContainer}>
        <Icon name={menuItem.icon} size={23} color={colors.primary} />
        <Text style={styles.itemText}>{menuItem.name}</Text>
        <View style={styles.spacer} />
        <Icon name="chevron-forward-outline" size={23} color="grey" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuItemContainer: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
  spacer: {
    flex: 1,
  },
});
