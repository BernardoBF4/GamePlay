import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home";
import SignIn from "../screens/SignIn";
import Background from "../components/Background";
import theme from "../global/styles/theme";

const AuthRoutes = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Background>
      <Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: theme.colors.secondary100
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