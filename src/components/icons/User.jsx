import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width="16" height="17" fill="none" viewBox="0 0 16 17" {...props}>
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.762 4.127C11.762 1.757 10.077 0 8 0S4.237 1.757 4.237 4.127 5.921 8.421 8 8.421c2.078 0 3.763-1.923 3.763-4.294zm4.192 10.566l-.38-1.72c-.472-2.13-2.466-3.557-4.618-3.304a25.305 25.305 0 01-5.912 0C2.89 9.416.897 10.843.426 12.974l-.38 1.719A1.888 1.888 0 001.881 17h12.236c.138 0 .275-.015.41-.045a1.895 1.895 0 001.426-2.262z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default SvgComponent;
