import {Platform, StyleSheet} from 'react-native';
import {COLORS, SCREEN} from '../../../constants';

export const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    // position: 'absolute',
    // bottom: 0,
    height: 83,
    width: SCREEN.WIDTH,
    backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.BLACK,
    shadowOpacity: Platform.select({android: 0.6, ios: 0.3}),
    shadowOffset: {height: Platform.select({android: -5, ios: 0})},
    elevation: 20,
    shadowRadius: 12,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    borderColor: 'red',
  },
  barIconContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
});
