import React from 'react';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND,
    borderRadius: 12,
    paddingVertical: 10,
    marginBottom: 25,
    borderWidth: 1,
  },
  dropdown: {
    paddingLeft: 14,
    paddingRight: 20,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: COLORS.WHITE,
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: COLORS.GREY_LIGHTER,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: COLORS.BLACK,
  },
  iconStyle: {
    width: 28,
    height: 28,
    tintColor: COLORS.PRIMARY,
  },
  listContainerStyles: {
    marginTop: 10,
    borderRadius: 15,
  },
  erroContainer: {
    position: 'absolute',
    bottom: -20,
    left: 14,
  },
});
export default styles;
