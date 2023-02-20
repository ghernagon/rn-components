import React, {useContext, useState} from 'react';
import {ScrollView, View, RefreshControl} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/theme/ThemeContext';
import {appTheme} from '../theme/appTheme';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('loading finished');
      setRefreshing(false);
      setData('Hello World');
    }, 3500);
  };

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          // progressViewOffset={20} // Moves the refresh control top position
          progressBackgroundColor={colors.primary} // Android
          colors={['white', 'red', 'orange']} // Android
          style={{backgroundColor: colors.primary}} // iOS
          tintColor={colors.text} // iOS
          title="Refreshing"
          titleColor={colors.text}
        />
      }>
      <View style={appTheme.globalMargin}>
        <HeaderTitle title="Pull to refresh" />

        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
