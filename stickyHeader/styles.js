import {Platform, StyleSheet} from 'react-native';
import {COLORS, FONTS, SCREEN, SCREEN_PADDING} from '../../../constants';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    elevation: 4,
    zIndex: 1,
    backgroundColor: COLORS.PRIMARY,
    position: 'absolute',
    width: SCREEN.WIDTH,
    justifyContent: 'center',
  },
  subContainer: {
    elevation: 4,
    zIndex: 1,
    backgroundColor: COLORS.PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 70,
  },
  imageStyle: {
    marginLeft: 20,
    width: 84,
    height: 40,
    objectFit: 'contain',
  },
  icon: {
    position: 'absolute',
    padding: 15,
    borderRadius: 40,
    right: 0,
    zIndex: 1,
  },
  leftIcon: {
    position: 'absolute',
    padding: 20,
    left: 0,
    zIndex: 1,
  },
  titleText: {
    flex: 1,
  },
  bottomTabsContainer: {
    position: 'absolute',
    zIndex: 1,
    width: SCREEN.WIDTH - SCREEN_PADDING * 2,
    marginLeft: SCREEN_PADDING,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: SCREEN_PADDING,
    paddingVertical: Platform.OS === 'ios' ? 18 : 4,
    borderRadius: 12,
    backgroundColor: COLORS.GREY_BORDER,
    marginBottom: 20,
    alignItems: 'center',
  },
  textInput: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    color: COLORS.BLACK,
    paddingLeft: 15,
    flex: 1,
  },
  buttonStyles: {
    // marginTop: SCREEN_PADDING,
    backgroundColor: COLORS.BACKGROUND,
    borderWidth: 1,
    // marginBottom: 40,
  },
  bottomTabsContainerRoot: {
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN.WIDTH,
    backgroundColor: COLORS.WHITE,
    opacity: 0.9,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  dualButtonContainer: {
    backgroundColor: COLORS.GREY_BORDER,
    width: SCREEN.WIDTH / 1.6,
  },
  tabsContainer: {
    // borderWidth: 1,
    backgroundColor: COLORS.GREY_150,
    width: SCREEN.WIDTH - SCREEN_PADDING * 2,
  },
});

export default styles;
