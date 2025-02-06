import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IIconProps} from '../../../types/appTypes.types';

const HomeIcon: FC<IIconProps> = ({size, color}) => {
  return (
    <Svg
      width={size ?? '25'}
      height={size ?? '25'}
      viewBox="0 0 25 25"
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.89712 8.89949C3.40995 9.27841 3.125 9.86102 3.125 10.4782V20.5C3.125 21.0305 3.33571 21.5392 3.71079 21.9142C4.08586 22.2893 4.59457 22.5 5.125 22.5H9.125V15.5C9.125 14.9477 9.57272 14.5 10.125 14.5H14.125C14.6773 14.5 15.125 14.9477 15.125 15.5V22.5H19.125C19.6554 22.5 20.1641 22.2893 20.5392 21.9142C20.9143 21.5392 21.125 21.0305 21.125 20.5V10.4782C21.125 9.86102 20.8401 9.27841 20.3529 8.89949L13.3529 3.45505C12.6307 2.89332 11.6193 2.89332 10.8971 3.45505L3.89712 8.89949Z"
        fill={color ?? '#F30745'}
      />
    </Svg>
  );
};

export default HomeIcon;
