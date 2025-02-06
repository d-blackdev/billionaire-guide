import {View, Text} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../styles/globalStyles';
import SkeletonLoader from '../../../components/loader/SkeletonLoader';

const SectionMovieLoader = () => {
  return (
    <View
      style={[
        globalStyles.w10,
        globalStyles.gapColumn05,
        globalStyles.flexRow,
        globalStyles.alignItemsCenter,
      ]}>
      {[1, 2, 3, 4].map((_, index) => (
        <View key={index} style={[{width: 150}]}>
          <SkeletonLoader height={200} />
        </View>
      ))}
    </View>
  );
};

export default SectionMovieLoader;
