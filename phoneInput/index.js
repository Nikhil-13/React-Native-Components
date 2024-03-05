import React, {useState, useCallback, Fragment} from 'react';
import {TextInput, View, Text, Pressable, TouchableOpacity} from 'react-native';
import styles from './styles';
import {CountryPicker} from 'react-native-country-codes-picker';
import {COLORS} from '../../../constants';

import {SharedStyles} from '../../../shared';
import {ArrowDown} from '../../svg';

const PhoneInput = ({
  error,
  editable = true,
  isValid = false,
  onPress,
  containerStyle = {},
  isPhoneNumber = false,
  onCallingCodeChange,
  userCountry = '+91',
  getCountryCode,
  ...props
}) => {
  const [country, setCountry] = useState(userCountry);
  const [show, setShow] = useState(false);

  const placeholderTextColor = COLORS.GREY_LIGHT;

  const onFocusHandler = useCallback(() => {
    props?.onFocus?.();
  }, [props?.onFocus]);

  const onBlurHandler = useCallback(
    e => {
      props?.onBlur?.(e);
    },
    [props?.onBlur],
  );

  return (
    <Fragment>
      <Pressable
        style={[
          styles.main,
          {borderColor: !!error ? COLORS.PRIMARY : COLORS.TRANSPARENT},
        ]}
        onPress={editable ? undefined : onPress}>
        <View
          pointerEvents={!editable ? 'none' : undefined}
          style={[styles.container, containerStyle]}>
          <View style={styles.subContainer}>
            <TouchableOpacity
              style={styles.phoneNumberContainer}
              onPress={() => setShow(true)}
              hitSlop={SharedStyles.hitSlop10}>
              <View>
                <Text style={styles.phoneNumberText}>{country}</Text>
              </View>
              <ArrowDown />
            </TouchableOpacity>
            <TextInput
              {...props}
              editable={editable}
              onBlur={onBlurHandler}
              onFocus={onFocusHandler}
              placeholderTextColor={placeholderTextColor}
              style={[styles.textInput]}
              maxLength={10}
              keyboardType="number-pad"
            />
          </View>
        </View>
        <CountryPicker
          show={show}
          initialState=""
          pickerButtonOnPress={item => {
            getCountryCode(item.dial_code);
            setCountry(item.dial_code);
            setShow(false);
          }}
          onRequestClose={() => setShow(false)}
          style={styles.modalStyles}
          onBackdropPress={() => setShow(false)}
        />
      </Pressable>
      {!!error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
    </Fragment>
  );
};

export default PhoneInput;
