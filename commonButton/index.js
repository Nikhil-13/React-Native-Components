import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';

const CommonButton = ({
  onPress,
  title,
  containerStyle,
  textStyle,
  children,
  color,
}) => {
  return (
    <Pressable
      style={[styles.innerContainer, containerStyle]}
      onPress={onPress}>
      <View>
        {!!children && children}
        {title && <Text style={textStyle}>{title}</Text>}
      </View>
    </Pressable>
  );
};

export default CommonButton;
