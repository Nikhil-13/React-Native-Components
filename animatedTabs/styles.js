import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: COLORS.LIGHT_PINK,
    overflow: 'hidden',
  },
  tabs: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedView: {
    backgroundColor: COLORS.PRIMARY,
    position: 'absolute',
    zIndex: -1,
    borderRadius: 12,
  },
  root: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: COLORS.LIGHT_PINK,
  },
  itemContainer: {},
});

export default styles;
