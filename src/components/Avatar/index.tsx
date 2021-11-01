import React from "react";
import { Image } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import theme from "../../global/styles/theme";
import styles from "./styles";

type Props = {
  urlImage: string;
}

const Avatar = ({ urlImage }: Props) => {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image
        source={{ uri: urlImage }}
        style={styles.image}
      />
    </LinearGradient>
  );
}

export default Avatar;