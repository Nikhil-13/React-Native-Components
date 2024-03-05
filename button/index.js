import React from 'react';
import {COLORS} from '../../../constants';
import StyledText from '../styledText';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import Loader from '../loader';

const Button = ({
  containerStyle = {},
  title = '',
  color = '',
  textColor = '',
  onPress = undefined,
  compact,
  isLoading = false,
  disabled = '',
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.root,
        containerStyle,
        {
          backgroundColor: !!color ? color : COLORS.PRIMARY,
          paddingVertical: !!compact ? compact : 15,
        },
        disabled && styles.disabled,
      ]}
      onPress={onPress}>
      {!!isLoading ? (
        <Loader size={25} />
      ) : (
        <StyledText
          color={!!textColor ? textColor : COLORS.WHITE}
          containerStyle={styles.text}
          textAlign="center">
          {title}
        </StyledText>
      )}
    </TouchableOpacity>
  );
};
export default Button;
