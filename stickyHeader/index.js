import React, {Fragment, useEffect, useState} from 'react';
import {
  View,
  Animated,
  FlatList,
  Image,
  LayoutAnimation,
  TextInput,
} from 'react-native';
import assets from '../../../constants/assets';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS, SCREEN_PADDING} from '../../../constants';
import styles from './styles';
import {SearchIcon} from '../../svg';
import {SharedStyles} from '../../../shared';
import RippleIconWrapper from '../rippleIconContainer';
import StyledText from '../styledText';
import AnimatedTabs from '../animatedTabs';

const StickyHeader = ({
  data = [],
  renderItem = undefined,
  title = '',
  onLeftIconPress = undefined,
  onFollowUpsTabPress = undefined,
  showHorizontalTabsList = false,
  selectedIndex = 0,
  showLogo = false,
  leftIcon,
  rightIcon,
  showBottomTabs = false,
  showFollowUpsTabs = false,
  followUpTabs = [],
  isSearchInputActive = false,
  onRightIconPress = undefined,
  flatListContainerStyles = {},
  listHeaderComponent = undefined,
  ...props
}) => {
  const insets = useSafeAreaInsets();
  const height = 70 + insets.top;
  const scrollY = new Animated.Value(0);
  const [show, setShow] = useState(true);
  const diffClamp = Animated.diffClamp(scrollY, 0, height);
  const translateY = diffClamp.interpolate({
    inputRange: [0, height],
    outputRange: [0, -height],
  });

  const translatex = diffClamp.interpolate({
    inputRange: [0, height],
    outputRange: [0, -height],
  });

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = SCREEN_PADDING;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };
  const renderDefaultListHeader = () => {
    return (
      <View
        style={{
          height: 70,
          backgroundColor: COLORS.WHITE,
        }}
      />
    );
  };

  console.log(translatex);

  return (
    <View style={[styles.root]}>
      {show && (
        <Fragment>
          <Animated.View
            style={[
              {
                transform: [{translateY: translateY}],
                height: height,
              },
              styles.container,
              SharedStyles.shadow,
            ]}>
            <View
              style={[
                {
                  marginTop: insets.top,
                },
                styles.subContainer,
              ]}>
              {!!leftIcon && (
                <View style={styles.leftIcon}>
                  <RippleIconWrapper onPress={onLeftIconPress}>
                    {leftIcon}
                  </RippleIconWrapper>
                </View>
              )}
              {!!title && (
                <StyledText
                  color={COLORS.WHITE}
                  textAlign="center"
                  size={16}
                  containerStyle={styles.titleText}>
                  {title}
                </StyledText>
              )}
              {!!showLogo && (
                <Image source={assets.LOGO_WHITE} style={styles.imageStyle} />
              )}
              {!!rightIcon && (
                <View style={styles.icon}>
                  <RippleIconWrapper onPress={onRightIconPress}>
                    {rightIcon}
                  </RippleIconWrapper>
                </View>
              )}
            </View>
          </Animated.View>
          {showBottomTabs && (
            <Animated.View
              style={[
                {
                  transform: [{translateY: translatex}],
                  marginTop:
                    insets.top && showBottomTabs ? height + 20 : height,
                  paddingTop: 10,
                },
                styles.bottomTabsContainerRoot,
              ]}>
              {isSearchInputActive && (
                <View style={styles.inputContainer}>
                  <SearchIcon color={COLORS.GREY_LIGHT} />
                  <TextInput
                    placeholder="Search"
                    style={styles.textInput}
                    placeholderTextColor={COLORS.GREY_LIGHT}
                  />
                </View>
              )}
              {showFollowUpsTabs && (
                <View style={styles.buttonContainer}>
                  <AnimatedTabs
                    onPress={onFollowUpsTabPress}
                    TABS={followUpTabs}
                    containerStyle={styles.tabsContainer}
                  />
                </View>
              )}
            </Animated.View>
          )}
        </Fragment>
      )}
      <FlatList
        ListHeaderComponent={
          !!listHeaderComponent ? listHeaderComponent : renderDefaultListHeader
        }
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        onScroll={e => {
          LayoutAnimation.easeInEaseOut();
          if (isCloseToBottom(e.nativeEvent) && data.length > 5) {
            setShow(false);
          } else if (e.nativeEvent.contentOffset.y > 0) {
            setShow(true);
            scrollY.setValue(e.nativeEvent.contentOffset.y);
          }
        }}
        scrollEventThrottle={16}
        style={[{marginTop: insets.top}, flatListContainerStyles]}
      />
    </View>
  );
};

export default StickyHeader;
