import {View, FlatList, ViewToken} from 'react-native';
import React, {useRef, useState} from 'react';
import _IonIcon from 'react-native-vector-icons/Ionicons';
import SingleShorts from './components/SingleShorts';
import {globalStyles, height} from '../../styles/globalStyles';
import {homeTrailer, IOnboarding} from '../../data/data';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

const Shorts = () => {
  const flatListRef = useRef<FlatList<IOnboarding> | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollY = useSharedValue(0);

  const viewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken<IOnboarding>[]}) => {
      setCurrentIndex(viewableItems[0]?.index as number);
      // setActiveVideo(homeTrailer[viewableItems[0]?.index as number].id);
    },
  ).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const handleScroll = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event?.contentOffset?.y;
    },
  });
  return (
    <View style={[globalStyles.flex, {backgroundColor: '#000'}]}>
      <Animated.FlatList
        data={homeTrailer}
        ref={flatListRef}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SingleShorts {...item} activeVideo={String(currentIndex + 1)} />
        )}
        showsVerticalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={height}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        onScroll={handleScroll}
        onViewableItemsChanged={viewableItemsChanged}
      />
    </View>
  );
};

export default Shorts;
