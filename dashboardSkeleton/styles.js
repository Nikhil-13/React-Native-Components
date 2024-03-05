import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

export const styles = StyleSheet.create({
  rootContainer: {
    gap: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  carousel: {height: 268, marginBottom: 20, borderRadius: 15},
  statsContainer: {marginBottom: 20},
  statsTitle: {height: 36, marginBottom: 20, borderRadius: 5},
  statsItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  statsItem: {
    flexGrow: 1,
    height: 157,
    marginBottom: 20,
    borderRadius: 15,
  },
  actionsContainer: {marginBottom: 20},
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionTitle: {height: 28, marginBottom: 20, borderRadius: 5},
  actionButton: {
    width: 50,
    height: 50,
    marginBottom: 20,
    borderRadius: 10,
  },
  notificationsContainer: {
    marginBottom: 20,
  },
  notificationTitle: {
    height: 28,
    marginBottom: 20,
    borderRadius: 5,
  },
  notificationItem: {
    height: 157,
    marginBottom: 20,
    borderRadius: 15,
  },
});
