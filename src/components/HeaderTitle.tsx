import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/theme/ThemeContext';
import {appTheme} from '../theme/appTheme';

type Props = {
  title: string;
  theme?: 'dark' | 'light';
};

export const HeaderTitle = ({title}: Props) => {
  const {top} = useSafeAreaInsets();
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={{...headerStyles.menuListHeader, marginTop: top}}>
      <Text style={{...appTheme.title, color: colors.text}}>{title}</Text>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  menuListHeader: {
    marginBottom: 20,
  },
});
