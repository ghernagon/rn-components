import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {FlatListSeparator} from '../components/FlatListSeparator';
import {HeaderTitle} from '../components/HeaderTitle';
import {menuItems} from '../models/menuItems';
import {appTheme} from '../theme/appTheme';

export const HomeScreen = () => {
  return (
    <View style={[homeScreenStyles.container, appTheme.globalMargin]}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Menu" />}
        ItemSeparatorComponent={() => <FlatListSeparator />}
      />
    </View>
  );
};

const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
