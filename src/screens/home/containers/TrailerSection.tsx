import {View, ViewToken} from 'react-native';
import React, {useRef, useState} from 'react';
import GlobalView from '../../../components/layout/GlobalView';
import {globalStyles, width} from '../../../styles/globalStyles';
import {homeTrailer, IOnboarding} from '../../../data/data';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {FlatList} from 'react-native-reanimated/lib/typescript/Animated';
import SingleTrailer from '../components/SingleTrailer';
import {HOME_TRAILER_HEIGHT} from '../../../constants/constants';
import SingleTrailerFooter from '../components/SingleTrailerFooter';
import {useIsFocused} from '@react-navigation/native';

const TrailerSection = () => {
  const flatListRef = useRef<FlatList<IOnboarding> | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useSharedValue(0);
  const isFocused = useIsFocused();

  const viewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken<IOnboarding>[]}) => {
      setCurrentIndex(viewableItems[0]?.index as number);
    },
  ).current;

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const handleScroll = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event?.contentOffset?.x;
    },
  });

  return (
    <GlobalView>
      {isFocused && (
        <View
          style={[
            globalStyles.w10,
            globalStyles.relative,
            globalStyles.flex,
            {height: HOME_TRAILER_HEIGHT},
          ]}>
          <Animated.FlatList
            ref={flatListRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            bounces={false}
            data={homeTrailer}
            keyExtractor={item => item.id}
            onViewableItemsChanged={viewableItemsChanged}
            renderItem={({item}) => (
              <SingleTrailer {...item} activeVideo={`${currentIndex + 1}`} />
            )}
            snapToAlignment="start"
            decelerationRate="fast"
            snapToInterval={width}
            viewabilityConfig={viewConfig}
            scrollEventThrottle={32}
            onScroll={handleScroll}
          />
          <SingleTrailerFooter currentIndex={currentIndex} scrollX={scrollX} />
        </View>
      )}
    </GlobalView>
  );
};

export default TrailerSection;
