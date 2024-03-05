import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
export const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  textStyle: {
    color: COLORS.BLACK,
    fontSize: 16,
  },
});
