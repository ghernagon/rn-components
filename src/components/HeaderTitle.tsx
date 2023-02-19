import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {appTheme} from '../theme/appTheme';

type Props = {
  title: string;
};

export const HeaderTitle = ({title}: Props) => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{...headerStyles.menuListHeader, marginTop: top}}>
      <Text style={{...appTheme.title, color: 'black'}}>{title}</Text>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  menuListHeader: {
    marginBottom: 20,
  },
});
