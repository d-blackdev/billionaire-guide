import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {View, Text, Platform, StyleSheet} from 'react-native';
import React from 'react';
import {TabNavigationParams} from '../../types/navigation.types';
import {HOME, PROFILE, REWARD, SHORTS} from '../../constants/constants';
import {hasDynamicIsland} from 'react-native-device-info';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import Home from '../../screens/home/Home';
import HomeIcon from '../../components/icons/bottomTabIcon/HomeIcon';
import Shorts from '../../screens/shorts/Shorts';
import ShortsIcon from '../../components/icons/bottomTabIcon/ShortsIcon';
import Reward from '../../screens/reward/Reward';
import RewardIcon from '../../components/icons/bottomTabIcon/RewardIcon';
import Profile from '../../screens/profile/Profile';
import ProfileIcon from '../../components/icons/bottomTabIcon/ProfileIcon';

const Tab = createBottomTabNavigator<TabNavigationParams>();
const BottomTab = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName={HOME}
        screenOptions={{
          tabBarStyle: [
            styles.tabBarStyle,
            hasDynamicIsland() && {paddingBottom: 30, height: 90},
          ],
          headerShown: false,
          tabBarInactiveTintColor: '#999999',
          tabBarActiveTintColor: '#F30745',
        }}>
        <Tab.Screen
          name={HOME as keyof TabNavigationParams}
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle: styles.tabLabelStyle,
            tabBarIcon: ({color, focused}) => <HomeIcon color={color} />,
          }}
        />
        <Tab.Screen
          name={SHORTS as keyof TabNavigationParams}
          component={Shorts}
          options={{
            tabBarLabel: 'sHORTS',
            tabBarLabelStyle: styles.tabLabelStyle,
            tabBarIcon: ({color, focused}) => <ShortsIcon color={color} />,
          }}
        />
        <Tab.Screen
          name={REWARD as keyof TabNavigationParams}
          component={Reward}
          options={{
            tabBarLabel: 'Reward',
            tabBarLabelStyle: styles.tabLabelStyle,
            tabBarIcon: ({color, focused}) => <RewardIcon color={color} />,
          }}
        />
        <Tab.Screen
          name={PROFILE as keyof TabNavigationParams}
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarLabelStyle: styles.tabLabelStyle,
            tabBarIcon: ({color, focused}) => <ProfileIcon color={color} />,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  tabBarStyle: {
    // position: 'absolute',
    backgroundColor: '#000',
    // bottom: 0,
    // paddingBottom: 15,
    borderTopWidth: 0,
    ...Platform.select({
      ios: {
        ...ifIphoneX(
          {
            paddingBottom: 40,
          },
          {
            paddingBottom: 20,
          },
        ),
      },
      android: {
        paddingBottom: 20,
      },
    }),
    ...Platform.select({
      ios: {
        ...ifIphoneX(
          {
            height: 90,
          },
          {
            height: 80,
          },
        ),
      },
      android: {
        height: 75,
      },
    }),
    ...Platform.select({
      ios: {
        ...ifIphoneX(
          {
            bottom: 0,
          },
          {
            bottom: 0,
          },
        ),
      },
      android: {
        bottom: 0,
      },
    }),
  },
  tabLabelStyle: {
    fontFamily: 'Inter',
    textTransform: 'capitalize',
    fontSize: 14,
    fontWeight: '400',
  },
  tabBarIconStyle: {
    ...Platform.select({
      ios: {
        ...ifIphoneX(
          {
            bottom: -10,
          },
          {
            bottom: -5,
          },
        ),
      },
      android: {
        bottom: -5,
      },
    }),
  },
});
