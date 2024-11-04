import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 13.313h-6A2.813 2.813 0 014.687 10.5v-6A2.813 2.813 0 017.5 1.687h6A2.813 2.813 0 0116.313 4.5v6a2.813 2.813 0 01-2.813 2.813zM5.812 10.5c0 .932.756 1.688 1.688 1.688h6c.932 0 1.688-.756 1.688-1.688v-6c0-.932-.756-1.688-1.688-1.688h-6c-.932 0-1.688.756-1.688 1.688v6z"
        fill="currentColor"
      />
      <Path
        d="M2.603 4.852a.563.563 0 01.794.796 1.99 1.99 0 00-.584 1.413V13.5c0 .932.755 1.688 1.687 1.688h6.44c.53 0 1.038-.21 1.412-.585a.563.563 0 01.796.794 3.115 3.115 0 01-2.209.915H4.5A2.813 2.813 0 011.687 13.5V7.061a3.115 3.115 0 01.916-2.21z"
        fill="currentColor"
      />
    </Svg>
  );
}

export default SvgComponent;
