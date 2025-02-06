import {View, Text} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../styles/globalStyles';
import _IonIcon from 'react-native-vector-icons/Ionicons';

const IonIcon = _IonIcon as any;

const SectionHeader = ({title}: {title: string}) => {
  return (
    <View
      style={[
        globalStyles.w10,
        globalStyles.flexRow,
        globalStyles.alignItemsCenter,
        globalStyles.justifyBetween,
      ]}>
      <Text style={[{fontSize: 18, color: '#fff', fontWeight: '600'}]}>
        {title}
      </Text>
      <IonIcon name="chevron-forward" size={20} color="#fff" />
    </View>
  );
};

export default SectionHeader;
