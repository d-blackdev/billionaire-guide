import {
  NavigatorScreenParams,
  RouteProp,
  //  RouteProp
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {HOME, HOME_TAB, PROFILE, REWARD, SHORTS} from '../constants/constants';

export type MainStackParams = {
  [HOME_TAB]: NavigatorScreenParams<TabNavigationParams>;
};

/**
 * @Content This layer contains the stack typing for all tab present in the bottom tab navigation
 */
export type TabNavigationParams = {
  [HOME]: undefined;
  [SHORTS]: undefined;
  [REWARD]: undefined;
  [PROFILE]: undefined;
};

export type MainStackRouteProp<T extends keyof MainStackParams> = RouteProp<
  MainStackParams,
  T
>;

export type BottomTabStackRouteProp<T extends keyof TabNavigationParams> =
  RouteProp<TabNavigationParams, T>;

/**
 * @Usage Global typing the navigation hook
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface RootStackParamsList
  //   AuthStackParams,
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  extends TabNavigationParams {}

declare global {
  // eslint-disable-next-line  @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface RootParamList extends RootStackParamsList {}
  }
}
