import axios from "axios";
export const GET_AUTH = "GET_AUTH";
import { AsyncStorage } from "react-native";

export const getWeatherAction = (city) => {
  return async (dispatch) => {
    const response = await axios({
      url: "http://localhost:4002/graphql",
      method: "post",
      data: {
        query: `{
                    login(email:"${email}",password:"${password}"){
                        userId
                        token
                    }
                }`,
      },
    })
      .then((res) => {
        console.log(JSON.stringify(res.data));
        AsyncStorage.setItem("userId", res.data.data.login.userId);
        props.navigation.navigate("Weather");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};
