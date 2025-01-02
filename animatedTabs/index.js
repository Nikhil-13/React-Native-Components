import React, { useEffect, memo } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useTranslation } from "react-i18next";
import { colors } from "../../theme";
import { scale, width as SCREEN_WIDTH } from "../../utils";

interface TabOption {
  key: string;
  label: string;
}

interface Props {
  onTabPress: (index: number) => void;
  tabs: TabOption[];
  containerStyle?: ViewStyle;
  tabTextStyle?: TextStyle;
  tabStyles?: ViewStyle;
  horizontalPadding: number;
  activeIndex?: number;
}

const AnimatedSlidingTabs: React.FC<Props> = ({
  onTabPress,
  tabs,
  containerStyle,
  tabTextStyle,
  horizontalPadding,
  tabStyles,
  activeIndex,
}) => {
  const { t } = useTranslation();
  const ITEM_WIDTH = SCREEN_WIDTH / tabs.length;
  const animatedValue = useSharedValue(activeIndex);

  useEffect(() => {
    animatedValue.value = activeIndex;
  }, [activeIndex]);

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    left: withSpring(ITEM_WIDTH * animatedValue.value, {
      damping: 15,
      mass: 1,
      stiffness: 100,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 2,
    }),
  }));

  return (
    <View style={[styles.root, containerStyle]}>
      <View style={styles.container}>
        {tabs.map((item, index) => (
          <TouchableOpacity
            key={item.key || index}
            onPress={() => onTabPress(index)}
            style={[styles.tab, tabStyles]}
          >
            <Text
              style={[
                styles.tabText,
                tabTextStyle,
                { color: index === activeIndex ? colors.white : colors.black },
              ]}
            >
              {t(item.label)}
            </Text>
          </TouchableOpacity>
        ))}
        <Animated.View
          style={[
            styles.animatedIndicator,
            animatedIndicatorStyle,
            { width: ITEM_WIDTH - scale(horizontalPadding) * 2 },
          ]}
        />
      </View>
    </View>
  );
};

export default memo(AnimatedSlidingTabs);

const styles = StyleSheet.create({
  root: {
    overflow: "hidden",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    fontSize: scale(14),
  },
  animatedIndicator: {
    backgroundColor: colors.theme,
    position: "absolute",
    zIndex: -1,
    height: "100%",
    borderRadius: scale(4),
  },
});
