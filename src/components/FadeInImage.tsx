import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
import {colors} from '../theme/appTheme';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setisLoading] = useState(true);

  return (
    <View style={{...styles.loaderContainer, ...(style as any)}}>
      {isLoading && <ActivityIndicator size={25} color={colors.primary} />}
      <Animated.Image
        source={{uri}}
        onLoadEnd={() => {
          fadeIn();
          setisLoading(false);
        }}
        style={{...styles.image, opacity, ...(style as any)}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    width: '100%',
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 500,
  },
});
