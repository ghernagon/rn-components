import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ImageSourcePropType, SafeAreaView} from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../context/theme/ThemeContext';
import {useAnimation} from '../hooks/useAnimation';

const {width: screenWidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

interface Props extends StackScreenProps<any, any> {}

export const SlidesScreen = ({navigation}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const [activeIndex, setActiveIndex] = useState(0);
  // const [showNavigationButton, setShowNavigationButton] = useState(false);
  const showNavigationButton = useRef(false);

  const {opacity, fadeIn} = useAnimation();

  // ?: *** CAN USE USEREF TO AVOID CHANGE STATE WHEN BUTTON MUST SHOW UP AND JUST RESTRICT BUTTON CLICK
  // useEffect(() => {
  //   if (activeIndex === items.length - 1) {
  //     setShowNavigationButton(true);
  //     fadeIn();
  //   }
  // }, [activeIndex]);

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{...styles.sliderContainer, backgroundColor: colors.background}}>
        <Image source={item.img} style={styles.itemImage} />
        <Text style={{...styles.itemTitle, color: colors.primary}}>
          {item.title}
        </Text>
        <Text style={{...styles.itemDescription, color: colors.text}}>
          {item.desc}
        </Text>
      </View>
    );
  };

  const navigateHome = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        // ref={(c) => { this._carousel = c; }}
        data={items}
        renderItem={({item}: any) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
          if (index === items.length - 1) {
            showNavigationButton.current = true;
            fadeIn();
          }
        }}
        vertical={false}
      />
      <View style={styles.paginationContainer}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{...styles.paginationDots, backgroundColor: colors.primary}}
          containerStyle={
            {
              // backgroundColor: 'red',
              // flex: 1,
              // justifyContent: 'flex-start',
            }
          }
        />
        {/* Show button on last slide */}
        {/* CHECK *** */}
        {/* {showNavigationButton && ( */}
        <Animated.View style={{opacity}}>
          <TouchableOpacity
            style={{
              ...styles.navigationButton,
              backgroundColor: colors.primary,
            }}
            activeOpacity={0.9}
            onPress={() => {
              if (showNavigationButton.current) {
                navigateHome();
              }
            }}>
            <Text style={styles.buttonText}>Get In</Text>
            <Icon name="chevron-forward-outline" color="white" size={30} />
          </TouchableOpacity>
        </Animated.View>
        {/* )} */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  sliderContainer: {
    flex: 1,
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 16,
  },
  itemImage: {
    width: 350,
    height: 400,
    resizeMode: 'center',
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  paginationDots: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  navigationButton: {
    flexDirection: 'row',
    width: 120,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});
