/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import {FlatListSeparator} from '../components/FlatListSeparator';
import {HeaderTitle} from '../components/HeaderTitle';
import {appTheme} from '../theme/appTheme';

interface Casas {
  casa: string;
  data: string[];
}

const data: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
    ],
  },
];

export const SectionListScreen = () => {
  return (
    <View style={[appTheme.globalMargin, styles.container]}>
      <SectionList
        sections={data}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        stickySectionHeadersEnabled={true} // Android
        ListFooterComponent={() => (
          <View style={styles.listFooter}>
            <HeaderTitle title={`Total Casas: ${data.length}`} />
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View style={styles.sectionHeader}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <HeaderTitle title={`Total: ${section.data.length}`} />
        )}
        ItemSeparatorComponent={() => <FlatListSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    backgroundColor: 'white',
  },
  listFooter: {
    marginBottom: 70,
  },
});
