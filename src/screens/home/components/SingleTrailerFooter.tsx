import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../styles/globalStyles';
import {homeTrailer} from '../../../data/data';
import {SharedValue} from 'react-native-reanimated';
import HomeTrailerPagination from './HomeTrailerPagination';
import _IonIcon from 'react-native-vector-icons/Ionicons';

const IonIcon = _IonIcon as any;
const SingleTrailerFooter = ({
  currentIndex,
  scrollX,
}: {
  currentIndex: number;
  scrollX: SharedValue<number>;
}) => {
  return (
    <View
      style={[
        globalStyles.absolute,
        globalStyles.alignSelfCenter,
        {left: 'auto', right: 'auto', bottom: 50},
      ]}>
      <View
        style={[
          globalStyles.flexRow,
          globalStyles.alignItemsCenter,
          globalStyles.gapColumn10,
        ]}>
        {homeTrailer[currentIndex]?.categories.map((item, index) => (
          <View
            key={index}
            style={[
              styles.categoryContainer,
              globalStyles.flexCenter,
              globalStyles.px05,
              globalStyles.py05,
              globalStyles.br8,
            ]}>
            <Text style={[{fontSize: 14, color: 'rgba(255,255,255,0.6)'}]}>
              {item}
            </Text>
          </View>
        ))}
      </View>
      <Pressable
        style={[
          styles.button,
          globalStyles.flexCenter,
          globalStyles.mt2,
          globalStyles.gapColumn05,
          globalStyles.alignSelfCenter,
        ]}>
        <IonIcon name="play" size={20} color="#000" />
        <Text style={[{fontSize: 17, color: '#000', fontWeight: '700'}]}>
          Play
        </Text>
      </Pressable>
      <View style={[globalStyles.alignSelfCenter]}>
        <HomeTrailerPagination scrollX={scrollX} currentIndex={currentIndex} />
      </View>
    </View>
  );
};

export default SingleTrailerFooter;
const styles = StyleSheet.create({
  categoryContainer: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  button: {
    width: 150,
    height: 45,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 8,
  },
});
