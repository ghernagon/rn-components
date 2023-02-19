import React, {useState} from 'react';
import {ScrollView, View, RefreshControl} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {appTheme, colors} from '../theme/appTheme';

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
          tintColor={'white'} // iOS
          title="Refreshing"
          titleColor="white"
        />
      }>
      <View style={appTheme.globalMargin}>
        <HeaderTitle title="Pull to refresh" />

        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
