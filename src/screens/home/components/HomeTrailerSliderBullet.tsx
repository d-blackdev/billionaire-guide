import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import Animated, {
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {globalStyles} from '../../../styles/globalStyles';
const {width} = Dimensions.get('screen');

const HomeTrailerSliderBullet = ({
  idx,
  scrollX,
  currentIndex,
}: {
  idx: number;
  scrollX: SharedValue<number>;
  currentIndex: number;
}) => {
  const animatedBulletStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      scrollX.value,
      [(idx - 1) * width, idx * width, (idx + 1) * width],
      ['rgba(225,225,225,0.6)', 'rgba(243, 7, 69, 1)', 'rgba(225,225,225,0.6)'],
    );
    return {backgroundColor};
  });
  return (
    <Animated.View
      style={[
        globalStyles.brFull,
        animatedBulletStyle,
        {height: 8, width: currentIndex === idx ? 20 : 8, borderRadius: 100},
      ]}
    />
  );
};

export default HomeTrailerSliderBullet;
