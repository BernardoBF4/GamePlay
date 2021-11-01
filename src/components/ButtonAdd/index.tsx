import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../global/styles/theme';
import styles from './styles';

const ButtonAdd = ({ ...rest }: RectButtonProps) => {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <Icons
        name="plus"
        color={theme.colors.heading}
        size={24}
        style={styles.icon}
      />
    </RectButton>
  );
}

export default ButtonAdd;