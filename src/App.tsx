/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import BottomTab from './navigations/bottomTab/BottomTab';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}

export default App;
