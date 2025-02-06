import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {globalStyles} from '../../styles/globalStyles';

const SkeletonLoader = ({height}: {height: number}) => {
  return (
    <SkeletonPlaceholder
      borderRadius={4}
      backgroundColor={'rgba(230, 230, 230, 0.3)'}
      highlightColor="#C5C5C5FF">
      <SkeletonPlaceholder.Item style={[globalStyles.w10]} height={height} />
    </SkeletonPlaceholder>
  );
};

export default SkeletonLoader;
