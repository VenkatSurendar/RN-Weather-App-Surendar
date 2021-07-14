import React from "react";
import Home_Screen from "../Screens/Home/Home_Screen";

//NAVIGATION
import { createStackNavigator } from "@react-navigation/stack";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ header: () => null }}>
      <HomeStack.Screen
        name="Home"
        component={Home_Screen}
        //  options={{ title: "Sign In" }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
