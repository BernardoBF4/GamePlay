import React from "react";
import { View, Text } from 'react-native';
import Avatar from "../Avatar";
import styles from "./styles";

const Profile = () => {
  return (
    <View
      style={styles.container}
    >
      <Avatar
        urlImage="https://github.com/BernardoBF4.png"
      />
      <View>
        <View
          style={styles.user}
        >
          <Text
            style={styles.greatings}
          >
            Olá,
          </Text>
          <Text
            style={styles.user_name}
          >
            Bernardo
          </Text>
        </View>
        <Text
          style={styles.message}
        >
          Hoje é dia de vitória
        </Text>
      </View>
    </View>
  );
}

export default Profile;