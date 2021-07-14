import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  AsyncStorage,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import axios from "axios";
import styles from "./SignIn_Styles.js";
import * as Animatable from "react-native-animatable";

const SignInScreen = (props) => {
  function onLogin() {
    axios({
      url: "http://10.59.96.38:4002/graphql",
      method: "post",
      data: {
        query: `
         {
          login(email:"${email}",password:"${password}"){
           userId
           token
          }
         }
         `,
      },
    })
      .then((res) => {
        console.log(JSON.stringify(res.data));
        //  props.loginDetails(res.data.data)
        AsyncStorage.setItem("userId", res.data.data.login.userId);

        props.navigation.navigate("Home");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor="black" barStyle="light-content" /> */}

      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome to Weather-App.</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: "#edeff0",
            //colors.background
          },
        ]}
      >
        <KeyboardAvoidingView>
          <Text
            style={[
              styles.text_footer,
              {
                color: "#fffff",
              },
            ]}
          >
            Mail ID
          </Text>

          <TextInput
            style={styles.textInput}
            placeholder="Enter e-mail Here"
            value={email}
            autoCapitalize="none"
            onChangeText={(email) => setEmail(email)}
          />
          <Text>Password</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Enter Password Here"
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
        </KeyboardAvoidingView>

        <TouchableOpacity
          style={styles.signIn}
          // onPress={() => navigation.navigate("Home")}
          onPress={onLogin}
        >
          <Text style={styles.textSign}>Sign In</Text>
          {/* </View> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, margin: 10, alignItems: "center" }}
          onPress={() => props.navigation.navigate("SignUp")}
        >
          <Text style={styles.textSign}>Sign Up</Text>
          {/* </View> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, margin: 10, alignItems: "center" }}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Text style={styles.textSign}>Forgot Password</Text>
          {/* </View> */}
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;
