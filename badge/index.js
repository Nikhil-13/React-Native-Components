import {View, Text} from 'react-native';
import React from 'react';

const Badge = ({containerStyle, textStyle, title, color, size}) => {
  return (
    <View
      style={
        (containerStyle,
        {
          paddingVertical: 4,
          paddingHorizontal: 15,
          backgroundColor: `${color}15`,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
        })
      }>
      <Text style={[textStyle, {color: color, fontSize: size}]}>{title}</Text>
    </View>
  );
};

export default Badge;
