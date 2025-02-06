import {View, Text} from 'react-native';
import React from 'react';
import {SharedValue} from 'react-native-reanimated';
import {globalStyles} from '../../../styles/globalStyles';
import {homeTrailer} from '../../../data/data';
import HomeTrailerSliderBullet from './HomeTrailerSliderBullet';

const HomeTrailerPagination = ({
  scrollX,
  currentIndex,
}: {
  scrollX: SharedValue<number>;
  currentIndex: number;
}) => {
  return (
    <View
      style={[
        globalStyles.gap08,
        globalStyles.flexStyle,
        globalStyles.justifyCenter,
        globalStyles.mt2,
      ]}>
      {homeTrailer.map((_, index) => (
        <HomeTrailerSliderBullet
          key={index}
          scrollX={scrollX}
          idx={index}
          currentIndex={currentIndex}
        />
      ))}
    </View>
  );
};

export default HomeTrailerPagination;
