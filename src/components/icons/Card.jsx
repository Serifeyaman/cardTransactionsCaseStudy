import * as React from 'react';
import Svg, { Path  } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="currentColor"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.193 6.408c0-2.328-1.495-3.892-3.72-3.892H6.081c-2.225 0-3.72 1.564-3.72 3.892v.067c0 .138.112.25.25.25h15.332a.25.25 0 00.25-.25v-.067zM10.044 12.426l1.025-1.833a2.085 2.085 0 011.816-1.067h4.1c.275 0 .54.055.785.156.188.078.424-.047.424-.25V8.226a.25.25 0 00-.25-.25H2.61a.25.25 0 00-.25.25v3.667c0 2.325 1.492 3.891 3.717 3.891h4.529a.25.25 0 00.185-.417l-.48-.533a2.09 2.09 0 01-.267-2.408z"
        fill="currentColor"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.939 15.925l-2.314-2.568.629-1.123h3.369l.628 1.123-2.312 2.568zm3.621-2.788l-1.026-1.833a.624.624 0 00-.545-.32h-4.102a.624.624 0 00-.545.32l-1.026 1.833a.625.625 0 00.08.723l3.078 3.418a.625.625 0 00.93 0l3.076-3.418c.179-.199.211-.489.08-.723z"
        fill="currentColor"
      />
    </Svg>
  );
}

export default SvgComponent;
