import {View, Animated} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {LocationPin} from '../../svg';

const ProgressBar = ({
  icon,
  current = 10,
  minVal = 0,
  maxVal = 100,
  completedIcon,
  vertical = false,
  trackColor = '#000000',
  progressColor = '#ffffff',
  trackStyle = {},
  progressStyle = {},
}) => {
  const customOuterStyle = {...trackStyle, backgroundColor: trackColor};
  const customInnerStyle = {...progressStyle, backgroundColor: progressColor};
  const rotateVertical = {transform: [vertical && {rotate: '90deg'}]};

  const mapNumRange = (num, inMin, inMax, outMin, outMax) =>
    ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

  return (
    <View
      style={[
        styles.defaultTrack,
        customOuterStyle,
        vertical && rotateVertical,
      ]}>
      <Animated.View
        style={[
          styles.defaultProgressInner,
          customInnerStyle,
          {width: `${mapNumRange(current, minVal, maxVal, 0, 100)}%`},
        ]}>
        {icon && (
          <View style={styles.iconContainer}>
            {mapNumRange(current, minVal, maxVal, 0, 100) === 100
              ? completedIcon
              : icon}
          </View>
        )}
      </Animated.View>
    </View>
  );
};

export default ProgressBar;
