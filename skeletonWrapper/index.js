import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {COLORS} from '../../../constants';
import {styles} from './styles';
import {View} from 'react-native';

const SkeletonWrapper = ({enabled, children}) => {
  return (
    <SkeletonPlaceholder
      borderRadius={4}
      highlightColor={COLORS.SKELETON_HIGHLIGHT}>
      {/* <View style={styles.carousel} />
      <View style={styles.statsContainer}>
        <View style={styles.statsTitle} />
        <View style={styles.statsItemContainer}>
          {[1, 2].map(_ => (
            <View style={styles.statsItem} />
          ))}
        </View>
      </View>
      <View style={styles.actionsContainer}>
        <View style={styles.actionTitle} />
        <View style={styles.actionButtonsContainer}>
          {[1, 2, 3, 4].map(_ => (
            <View style={styles.actionButton} />
          ))}
        </View>
      </View>
      <View style={styles.notificationsContainer}>
        <View style={styles.notificationTitle} />
        <View>
          {[1, 2, 3].map(_ => (
            <View style={styles.notificationItem} />
          ))}
        </View>
      </View> */}
      {children}
    </SkeletonPlaceholder>
  );
};
export default SkeletonWrapper;
