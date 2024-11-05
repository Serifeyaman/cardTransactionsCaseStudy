import * as React from 'react';
import Svg, { Defs, G, LinearGradient, Path, Stop  } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={37}
      height={23}
      viewBox="0 0 37 23"
      fill="none"
      {...props}
    >
      <G opacity={0.9}>
        <G filter="url(#filter0_di_0_2365)">
          <Path
            d="M36.207 11.314c-.12 5.358-4.556 9.602-9.909 9.482-5.352-.12-9.594-4.561-9.475-9.919.12-5.357 4.556-9.602 9.908-9.481 5.352.12 9.595 4.56 9.476 9.918z"
            stroke="#000"
            strokeOpacity={0.01}
            strokeWidth={0.854926}
          />
        </G>
        <G
          style={{
            mixBlendMode: "overlay"
          }}
          opacity={0.3}
          filter="url(#filter1_f_0_2365)"
        >
          <Path
            d="M36.349 11.317c-.121 5.436-4.623 9.744-10.054 9.621-5.43-.122-9.736-4.628-9.614-10.064.121-5.436 4.622-9.743 10.053-9.62 5.431.121 9.736 4.627 9.615 10.063z"
            stroke="url(#paint0_linear_0_2365)"
            strokeWidth={0.569951}
          />
        </G>
        <G filter="url(#filter2_di_0_2365)">
          <Path
            d="M21.04 11.078c-.119 5.357-4.555 9.602-9.907 9.482-5.353-.121-9.595-4.561-9.476-9.919.12-5.358 4.556-9.602 9.908-9.482 5.353.12 9.595 4.561 9.476 9.919z"
            stroke="#000"
            strokeOpacity={0.01}
            strokeWidth={0.854926}
          />
        </G>
        <G
          style={{
            mixBlendMode: "overlay"
          }}
          opacity={0.3}
          filter="url(#filter3_f_0_2365)"
        >
          <Path
            d="M21.183 11.081c-.121 5.436-4.623 9.743-10.054 9.621-5.43-.122-9.736-4.628-9.614-10.064.121-5.436 4.622-9.744 10.053-9.621 5.431.122 9.736 4.628 9.615 10.064z"
            stroke="url(#paint1_linear_0_2365)"
            strokeWidth={0.569951}
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_0_2365"
          x1={18.5155}
          y1={4.79964}
          x2={34.908}
          y2={21.5329}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_0_2365"
          x1={3.3495}
          y1={4.56331}
          x2={19.742}
          y2={21.2966}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
