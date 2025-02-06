import {View, Text} from 'react-native';
import React from 'react';
import _IonIcon from 'react-native-vector-icons/Ionicons';
import {globalStyles} from '../../../styles/globalStyles';

const IonIcon = _IonIcon as any;

const RightFooterSection = () => {
  return (
    <View style={[globalStyles.flexColumn, globalStyles.gapRow20]}>
      <View style={[globalStyles.flexCol, globalStyles.gapRow05]}>
        <IonIcon name="heart" size={24} color="#fff" />
        <Text style={{fontSize: 12, color: '#fff'}}>11.5K</Text>
      </View>
      <View style={[globalStyles.flexCol, globalStyles.gapRow05]}>
        <IonIcon name="bookmark" size={24} color="#fff" />
        <Text style={{fontSize: 12, color: '#fff'}}>312</Text>
      </View>
      <View style={[globalStyles.flexCol, globalStyles.gapRow05]}>
        <IonIcon name="share-social-sharp" size={24} color="#fff" />
        <Text style={{fontSize: 12, color: '#fff'}}>20</Text>
      </View>
    </View>
  );
};

export default RightFooterSection;
