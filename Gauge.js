import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Line, Text } from 'react-native-svg';

const Compass = ({radius, value, style, zIndex }) => {
  const circumference = 2 * Math.PI * radius;
  const percentage = (value / 360) * circumference;
  const angle = (value / 360) * 360;

  return (
    <View style={style} zIndex={zIndex}>
      <Svg width={2 * radius} height={2 * radius}>
        {/* <Circle
          cx={radius}
          cy={radius}
          r={radius - 10}
          stroke="lightgrey"
          strokeWidth="20"
        /> */}
        {/* <Circle
          cx={radius}
          cy={radius}
          r={radius - 10}
          stroke="blue"
          strokeWidth="20"
          strokeDasharray={[percentage, circumference]}
        /> */}
        <Circle
          cx={radius}
          cy={radius}
          r={radius}// Adjust the size of the center circle
          fill="lightgrey" // Change the color of the center
        />
        <Text x={radius-10} y={radius-10} fill="black" fontSize="15" textAnchor="start">
          {`${value}°`}
        </Text>
        <Text x={radius-4} y={4} fill="black" fontSize="15" textAnchor="start">
          {`N`}
        </Text>
        <Text x={radius-4} y={radius*2-20} fill="black" fontSize="15" textAnchor="start">
          {`S`}
        </Text>
        <Text x={radius*2-10} y={radius-10} fill="black" fontSize="15" textAnchor="start">
          {`E`}
        </Text>
        <Text x={4} y={radius-10} fill="black" fontSize="15" textAnchor="start">
          {`W`}
        </Text>
        <Line
          x1={radius}
          y1={radius-radius/3}
          x2={radius}
          y2={radius/3} // Adjust this value to control the length of the needle
          stroke="red"
          strokeWidth="3"
          transform={`rotate(${angle}, ${radius}, ${radius})`} // Rotate the needle
        />
      </Svg>
    </View>
  );
};

export default Compass;