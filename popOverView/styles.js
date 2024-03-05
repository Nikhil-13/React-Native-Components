import {StyleSheet} from 'react-native';
import {SCREEN, SCREEN_PADDING} from '../../../constants';

const styles = StyleSheet.create({
  root: {
    padding: SCREEN_PADDING,
    width: SCREEN.WIDTH / 2 - SCREEN_PADDING,
    borderRadius: 15,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  titleText: {
    paddingRight: 2,
  },
  innerText: {
    paddingVertical: 10,
  },
});

export default styles;
