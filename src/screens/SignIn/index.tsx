import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import IllustrationImg from '../../assets/illustration.png';
import { useNavigation } from '@react-navigation/core';
import ButtonIcon from '../../components/ButtonIcon';
import Background from '../../components/Background';

const SignIn = () => {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <Background>
      <View
        style={styles.container}
      >
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />
        <View
          style={styles.content}
        >
          <Text
            style={styles.title}
          >
            Organize {'\n'}
            suas jogatinas {'\n'}
            facilmente
          </Text>
          <Text
            style={styles.subtitle}
          >
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>
          <ButtonIcon
            title="Entrar com Discord"
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  );
}

export default SignIn;