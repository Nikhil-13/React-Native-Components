import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {COLORS, SCREEN, SCREEN_PADDING} from '../../../constants';
import StyledText from '../styledText';
import {SharedStyles} from '../../../shared';
import {useTranslation} from 'react-i18next';

const AnimatedTabs = ({
  onPress,
  TABS = [],
  containerStyle = {},
  paddingVertical,
  width,
  activeIndex = 0,
}) => {
  const {t} = useTranslation();
  const ITEM_WIDTH = !!width
    ? width / TABS.length
    : (SCREEN.WIDTH - SCREEN_PADDING * 3) / TABS.length;
  const [initialIndex, setInitialIndex] = useState(activeIndex);
  const [height, setHeight] = useState(0);
  const animatedValue = useSharedValue(0);

  useEffect(() => {
    setInitialIndex(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    animatedValue.value = initialIndex;
    // console.log({initialIndex});
  }, [initialIndex, animatedValue]);

  const animatedIndicatorStyle = useAnimatedStyle(
    () => ({
      left: withSpring(ITEM_WIDTH * animatedValue.value, {
        damping: 15,
        mass: 1,
        stiffness: 100,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 2,
      }),
    }),
    [animatedValue.value, ITEM_WIDTH],
  );
  return (
    <View style={[styles.root, containerStyle]}>
      <View
        style={[
          styles.container,
          {paddingVertical: !!paddingVertical ? paddingVertical : 10},
        ]}
        onLayout={event => {
          const {height} = event.nativeEvent.layout;
          setHeight(height);
        }}>
        {TABS.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              hitSlop={SharedStyles.hitSlop10}
              onPress={() => {
                onPress(index);
                setInitialIndex(index);
              }}
              style={[styles.tabs]}>
              <StyledText
                variant={'REGULAR'}
                textAlign="center"
                color={index === initialIndex ? COLORS.WHITE : COLORS.BLACK}
                size={14}
                containerStyle={styles.itemContainer}>
                {t(item)}
              </StyledText>
            </TouchableOpacity>
          );
        })}
        <Animated.View
          style={[
            styles.animatedView,
            animatedIndicatorStyle,
            {
              width: ITEM_WIDTH,
              height: height,
            },
          ]}
        />
      </View>
    </View>
  );
};

export default AnimatedTabs;
