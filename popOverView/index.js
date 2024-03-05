import React from 'react';
import Popover from 'react-native-popover-view';
import {COLORS} from '../../../constants';
import {TouchableOpacity} from 'react-native';
import StyledText from '../styledText';
import {ArrowDown} from '../../svg';
import styles from './styles';
import {useTranslation} from 'react-i18next';

const PopOverView = ({
  arrowSize = {width: 0, height: 0},
  data = [],
  onItemPress = undefined,
  titleTextColor = '',
  iconColor = '',
  onRequestClose = undefined,
  isVisible = false,
  onPopoverPress = undefined,
  isSelected = '',
  title = '',
  icon = '',
}) => {
  const {t} = useTranslation();
  return (
    <Popover
      isVisible={isVisible}
      onRequestClose={onRequestClose}
      placement="bottom"
      popoverStyle={styles.root}
      arrowSize={arrowSize}
      from={
        <TouchableOpacity style={styles.container} onPress={onPopoverPress}>
          <StyledText
            color={!!titleTextColor ? titleTextColor : COLORS.BLACK}
            textStyle={styles.titleText}
            size={16}>
            {title}
          </StyledText>
          {!!icon ? icon : <ArrowDown color={iconColor} />}
        </TouchableOpacity>
      }>
      <StyledText
        textStyle={styles.innerText}
        variant={'SEMI_BOLD'}
        size={14}
        color={COLORS.BLACK}>
        {'Select date'}
      </StyledText>
      {data.map((item, index) => {
        return (
          <TouchableOpacity onPress={onItemPress.bind(this, item)}>
            <StyledText
              textStyle={styles.innerText}
              size={14}
              variant={'SEMI_BOLD'}
              color={item === isSelected ? COLORS.PRIMARY : COLORS.GREY_LIGHT}>
              {t(item)}
            </StyledText>
          </TouchableOpacity>
        );
      })}
    </Popover>
  );
};
export default PopOverView;
