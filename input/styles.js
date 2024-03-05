import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../constants';

export default StyleSheet.create({
  main: {
    marginBottom: 8,
  },
  container: {
    overflow: 'hidden',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: COLORS.GREY_LIGHT,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    lineHeight: 18,
    fontFamily: FONTS.regular,
    color: COLORS.PRIMARY,
  },
  errorContainer: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 14,
    marginLeft: 7,
    maxWidth: '95%',
    lineHeight: 18,
    color: COLORS.PRIMARY,
    fontFamily: FONTS.regular,
  },
  placeHolderText: {
    fontFamily: FONTS.regular,
  },
  leftIconStyle: {
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
  },
  eyeIcon: {
    position: 'absolute',
    // top: 25,
    right: 16,
    zIndex: 1,
  },
  inputWrapper: {justifyContent: 'center'},
});
