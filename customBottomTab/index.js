import React, {useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HomeIcon, ManageIcon, ProfileIcon, TripsIcon} from '../../svg';
import {COLORS, NAVIGATION} from '../../../constants';
import {StyledText} from '../../common';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';

const CustomTabBar = ({state, navigation}) => {
  const {t} = useTranslation();
  const insets = useSafeAreaInsets();

  const onPress = useCallback(
    (route, index) => {
      const isFocused = state.index === index;
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    },
    [state.index, navigation],
  );

  return (
    <View style={styles.rootContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        return (
          <TouchableOpacity
            style={styles.button}
            key={route?.name}
            onPress={onPress.bind(this, route, index)}>
            {route.name === NAVIGATION.TABS.HOME ? (
              <View style={styles.barIconContainer}>
                <HomeIcon
                  size={24}
                  color={isFocused ? COLORS.PRIMARY : COLORS.GREY}
                />
                <StyledText
                  size={12}
                  variant="REGULAR"
                  color={isFocused ? COLORS.PRIMARY : COLORS.GREY}>
                  {t('BOTTOM_TABS.HOME')}
                </StyledText>
              </View>
            ) : route.name === NAVIGATION.TABS.MANAGE ? (
              <View style={styles.barIconContainer}>
                <ManageIcon
                  size={24}
                  color={isFocused ? COLORS.PRIMARY : COLORS.GREY}
                />
                <StyledText
                  size={12}
                  variant="REGULAR"
                  color={isFocused ? COLORS.PRIMARY : COLORS.GREY}>
                  {t('BOTTOM_TABS.MANAGE')}
                </StyledText>
              </View>
            ) : route.name === NAVIGATION.TABS.TRIPS ? (
              <View style={styles.barIconContainer}>
                <TripsIcon
                  size={24}
                  color={isFocused ? COLORS.PRIMARY : COLORS.GREY}
                />
                <StyledText
                  size={12}
                  variant="REGULAR"
                  color={isFocused ? COLORS.PRIMARY : COLORS.GREY}>
                  {t('BOTTOM_TABS.TRIPS')}
                </StyledText>
              </View>
            ) : route.name === NAVIGATION.TABS.PROFILE ? (
              <View style={styles.barIconContainer}>
                <ProfileIcon
                  size={24}
                  color={isFocused ? COLORS.PRIMARY : COLORS.GREY}
                />
                <StyledText
                  size={12}
                  variant="REGULAR"
                  color={isFocused ? COLORS.PRIMARY : COLORS.GREY}>
                  {t('BOTTOM_TABS.PROFILE')}
                </StyledText>
              </View>
            ) : (
              ''
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
