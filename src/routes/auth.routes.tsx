import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home";
import SignIn from "../screens/SignIn";
import Background from "../components/Background";
const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Background>
      <Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: 'transparent'
          },
          headerShown: false
        }}
      >
        <Screen
          name="SignIn"
          component={SignIn}
        />
        <Screen
          name="Home"
          component={Home}
        />
      </Navigator>
    </Background>
  );
}

export default AuthRoutes;


// Estrutura de navegação