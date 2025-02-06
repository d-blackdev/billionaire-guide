import {View, Text} from 'react-native';
import React, {FC, PropsWithChildren} from 'react';
import {globalStyles} from '../../styles/globalStyles';
import {SafeAreaView} from 'react-native-safe-area-context';

const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <View
      style={[globalStyles.w10, globalStyles.flex, {backgroundColor: '#000'}]}>
      {/* <SafeAreaView style={[globalStyles.flex]}> */}
      {children}
      {/* </SafeAreaView> */}
    </View>
  );
};

export default Layout;
