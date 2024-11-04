import * as React from 'react';
import Svg, { Path  } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <Path
        d="M12.084 3.246l4.21 3.445a3.29 3.29 0 011.147 3.165l-.952 4.97a3.29 3.29 0 01-3.231 2.67H6.741a3.29 3.29 0 01-3.23-2.67l-.952-4.97A3.29 3.29 0 013.706 6.69l4.21-3.445a3.29 3.29 0 014.168 0z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.83 17.497V14.71a2.17 2.17 0 014.342 0v2.787"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
