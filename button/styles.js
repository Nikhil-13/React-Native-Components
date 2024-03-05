const {StyleSheet} = require('react-native');
const {COLORS} = require('../../../constants');

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
    borderRadius: 15,
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: COLORS.GREY_LIGHTER,
  },
});

export default styles;
