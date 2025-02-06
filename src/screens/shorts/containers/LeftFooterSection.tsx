import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import _IonIcon from 'react-native-vector-icons/Ionicons';
import {globalStyles} from '../../../styles/globalStyles';

const IonIcon = _IonIcon as any;

const LeftFooterSection = ({
  caption,
  title,
}: {
  caption: string;
  title: string;
}) => {
  return (
    <View
      style={[globalStyles.w8, globalStyles.flexColumn, globalStyles.gapRow10]}>
      <View
        style={[
          globalStyles.w10,
          globalStyles.flexColumn,
          globalStyles.gapRow05,
        ]}>
        <Text style={[{fontSize: 16, color: '#fff', fontWeight: '700'}]}>
          {title}
        </Text>
        <Text
          numberOfLines={2}
          style={[{fontSize: 14, color: '#fff', fontWeight: '500'}]}>
          {caption}
        </Text>
      </View>
      <Pressable
        style={[
          styles.button,
          globalStyles.flexCenter,
          globalStyles.mt1,
          globalStyles.gapColumn05,
        ]}>
        <IonIcon name="play" size={16} color="#fff" />
        <Text style={[{fontSize: 14, color: '#fff', fontWeight: '500'}]}>
          Watch now
        </Text>
      </Pressable>
    </View>
  );
};

export default LeftFooterSection;

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 33,
    backgroundColor: '#F30745',
    borderRadius: 8,
  },
});
