import React from "react";
import { Image } from "react-native";
import styles from "./styles";

const GuildIcon = () => {
  const uri = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.XqBh-puSVB4RmYO1cOSCcgAAAA%26pid%3DApi&f=1";

  return (
    <Image
      style={styles.image}
      source={{ uri }}
      resizeMode="cover"
    />
  );
}

export default GuildIcon;