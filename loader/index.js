import * as React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {COLORS} from '../../../constants';

const Loader = ({color = '', size = ''}) => (
  <ActivityIndicator
    animating={true}
    color={!!color ? color : COLORS.WHITE}
    size={size}
  />
);

export default Loader;
