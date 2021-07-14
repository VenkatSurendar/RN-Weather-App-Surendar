import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStackScreen } from "./AuthNavigator";
import HomeStackScreen from "./HomeNavigator";

///
import SignIn_Screen from "../Screens/SignIn/SignIn_Screen";
import SignUp_Screen from "../Screens/SignIn/SingUp_Screen";
import ForgotPassword_Screen from "../Screens/ForgotPassword/ForgotPassword_Screen";

import Home_Screen from "../Screens/Home/Home_Screen";

//NAVIGATION
import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();
///

const HomeStack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{ header: () => null }}>
        <AuthStack.Screen
          name="SignIn"
          component={SignIn_Screen}
          //  options={{ title: "Sign In" }}
        />

        <AuthStack.Screen
          name="ForgotPassword"
          component={ForgotPassword_Screen}
          options={{ title: "Forgot Password" }}
        />

        <AuthStack.Screen
          name="SignUp"
          component={SignUp_Screen}
          options={{ title: "SignUp" }}
        />
        <HomeStack.Screen
          name="Home"
          component={Home_Screen}
          //  options={{ title: "Sign In" }}
        />
      </AuthStack.Navigator>

      {/* <HomeStackScreen /> */}

      {/* <HomeStack.Navigator screenOptions={{ header: () => null }}>
        <HomeStack.Screen
          name="Home"
          component={Home_Screen}
          //  options={{ title: "Sign In" }}
        />
      </HomeStack.Navigator> */}
    </NavigationContainer>
  );
}

export default AppNavigator;
