import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  defaultTrack: {
    height: 10,
    width: 100,
    zIndex: -2,
  },
  defaultProgressInner: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: '100%',
  },
  iconContainer: {
    position: 'absolute',
    top: -32,
    right: -32,
    zIndex: 1,
  },
});
