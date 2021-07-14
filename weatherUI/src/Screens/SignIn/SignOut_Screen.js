import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SignOut_Screen = ({ navigation }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        margin: "10",
      }}
    >
      <Text>Are you sure you want to Sign Out?</Text>
      <TouchableOpacity
      // onPress={() => {
      //   navigation.navigate("SignIn");
      // }}
      >
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignOut_Screen;
