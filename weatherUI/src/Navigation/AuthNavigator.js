import React from "react";
import SignIn_Screen from "../Screens/SignIn/SignIn_Screen";
import SignUp_Screen from "../Screens/SignIn/SingUp_Screen";
import ForgotPassword_Screen from "../Screens/ForgotPassword/ForgotPassword_Screen";
import Home_Screen from "../Screens/Home/Home_Screen";

//NAVIGATION
import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
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
    </AuthStack.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home_Screen}
        //  options={{ title: "Sign In" }}
      />
    </HomeStack.Navigator>
  );
};

export default { AuthStackScreen, HomeStackScreen };
