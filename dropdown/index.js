import React, {Fragment} from 'react';
import {View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import styles from './styles';
import StyledText from '../styledText';
import {ArrowDown} from '../../svg';
import {COLORS, FONTS} from '../../../constants';

const DropdownComponent = ({
  onChange = undefined,
  placeholder = '',
  value = '',
  data = [],
  error = '',
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: !error ? COLORS.BACKGROUND : COLORS.PRIMARY,
        },
      ]}>
      <Dropdown
        style={[styles.dropdown]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        dropdownPosition="bottom"
        data={data}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        fontFamily={FONTS.REGULAR}
        maxHeight={250}
        containerStyle={styles.listContainerStyles}
        renderRightIcon={() => <ArrowDown />}
        itemTextStyle={styles.selectedTextStyle}
      />
      {!!error && (
        <View style={styles.erroContainer}>
          <StyledText size={14}>{error}</StyledText>
        </View>
      )}
    </View>
  );
};

export default DropdownComponent;
