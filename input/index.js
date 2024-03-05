import React, {useState, useCallback, forwardRef} from 'react';
import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import styles from './styles';
import {SharedStyles} from '../../../shared';
import {COLORS, FONTS} from '../../../constants';
import {TextInput} from 'react-native-paper';
import {EyeClose, EyeOpen} from '../../svg';

export default forwardRef(
  (
    {
      error,
      isPassword = false,
      editable = true,
      onPress,
      label = '',
      value = '',
      onChangeText = undefined,
      rightIcon = null,
      placeholder = '',
      containerStyles = {},
      showErrorPadding = true,
      ...props
    },
    ref,
  ) => {
    const [isSecure, setIsSecure] = useState(isPassword);

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
      <Pressable style={[styles.main, containerStyles]} onPress={onPress}>
        <View style={styles.inputWrapper}>
          <TextInput
            ref={ref}
            {...props}
            autoCapitalize="none"
            onPressIn={onPress}
            label={label}
            value={value}
            onChangeText={onChangeText}
            editable={editable}
            // placeholder={placeholder}
            onBlur={onBlurHandler}
            onFocus={onFocusHandler}
            secureTextEntry={isSecure}
            theme={{
              roundness: 12,
              colors: {
                primary: !!error ? COLORS.PRIMARY : COLORS.GREY_LIGHTER,
                placeholder: COLORS.GREY_LIGHTER,
                background: COLORS.BACKGROUND,
              },
              fonts: FONTS.REGULAR,
            }}
            outlineColor={!!error ? COLORS.PRIMARY : COLORS.BACKGROUND}
            selectionColor={COLORS.GREY_LIGHTER}
            mode="outlined"
          />
          {!!rightIcon && (
            <View style={styles.eyeIcon}>
              {typeof rightIcon === 'function' ? rightIcon?.() : rightIcon}
            </View>
          )}
          {isPassword && (
            <TouchableOpacity
              style={styles.eyeIcon}
              hitSlop={SharedStyles.hitSlop10}
              onPress={() => setIsSecure(p => !p)}>
              {!!isSecure ? <EyeClose /> : <EyeOpen />}
            </TouchableOpacity>
          )}
        </View>
        {!!showErrorPadding && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{!!error && error}</Text>
          </View>
        )}
      </Pressable>
    );
  },
);
