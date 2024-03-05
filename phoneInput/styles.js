import {Platform, StyleSheet} from 'react-native';
import {COLORS, FONTS, SCREEN, SCREEN_PADDING} from '../../../constants';

export default StyleSheet.create({
  main: {
    backgroundColor: COLORS.BACKGROUND,
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 12,
  },
  container: {
    overflow: 'hidden',
    flexDirection: 'row',
    borderColor: COLORS.GREY_LIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    lineHeight: 18,
    marginLeft: 8,
    fontFamily: FONTS.regular,
    marginVertical: 5,
    color: COLORS.BLACK,
    paddingVertical: Platform.OS === 'ios' ? 10 : 5,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    paddingBottom: 10,
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
  countryPickerContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1,
    paddingLeft: 20,
  },
  theme: {
    fontSize: 16,
    flagSizeButton: 18,
    fontFamily: FONTS.regular,
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SCREEN_PADDING,
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneNumberText: {
    color: COLORS.PRIMARY,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: FONTS.regular,
  },
  modalStyles: {
    modal: {
      height: SCREEN.HEIGHT / 2,
    },
    dialCode: {
      color: 'black',
    },
    countryName: {
      color: 'black',
    },
    textInput: {
      color: 'black',
    },
    searchMessageText: {
      color: 'grey',
    },
  },
});
