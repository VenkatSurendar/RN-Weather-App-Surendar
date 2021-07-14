import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./Current_Weather_Styles.js";
import { connect } from "react-redux";
import {
  getCurrentWeather,
  getForecastWeather,
} from "../../Redux/Actions/Actions";
import moment from "moment";

const Current_Weather = (props) => {
  const curr_precip = !props.weather.weather_info
    ? null
    : props.weather.weather_info[0].HasPrecipitation === false
    ? "No Rain"
    : "Rain";

  const [sname, setName] = useState("Default");
  console.log(props.weather);
  const curr_weather = !props.weather.weather_info ? null : (
    <Text style={{ color: "black" }}>
      {props.weather.weather_info[0].WeatherText}
    </Text>
  );
  const curr_date = !props.weather.weather_info ? null : (
    <Text style={{ color: "black" }}>
      {props.weather.weather_info[0].EpochTime}
    </Text>
  );
  const curr_temp = !props.weather.weather_info ? null : (
    <Text style={{ color: "black" }}>
      {props.weather.weather_info[0].Temperature.Metric.Value}
    </Text>
  );

  const name = !props.city_name.data ? (
    <Text>{sname}</Text>
  ) : (
    <Text>{JSON.stringify(props.city_name.data.data)}</Text>
  );
  return (
    <View>
      <Text style={{ fontSize: 26, color: "#fff" }}>
        Current Weather {name}
      </Text>
      <View style={styles.weth}>
        {/* <View> */}
        <Text style={{ color: "#252525" }}>Date & Time</Text>
        <Text
          style={{
            flex: 1,
            flexDirection: "row",
            color: "#000000",
            // marginTop: 5,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {moment(curr_date * 1000).format("MMMM Do YYYY, h:mm:ss a")}
          {/* {curr_date} */}
        </Text>
        {/* </View> */}

        {/* <View> */}
        <Text style={{ color: "#252525" }}>Temperature</Text>
        <Text
          style={{
            flex: 1,
            color: "#000000",
            marginTop: 5,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {curr_temp}&deg;C
        </Text>
        {/* </View> */}
        {/* <View> */}
        <Text style={{ color: "#252525" }}>Weather</Text>
        <Text
          style={{
            flex: 1,
            color: "#000000",
            marginTop: 5,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {curr_weather}
        </Text>
        {/* </View> */}
        {/* <View> */}
        {/* <Text style={{ color: "#252525" }}>Precipitation</Text>
        <Text
          style={{
            flex: 1,
            color: "#000000",
            marginTop: 5,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {curr_precip}
        </Text> */}
        {/* </View> */}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    //From Combined Reducer
    weather: state.weather,
    forecast: state.forecast,
    city_name: state.searchCity,
  };
};

export default connect(mapStateToProps, {
  getCurrentWeather: getCurrentWeather,
  getForecastWeather: getForecastWeather,
})(Current_Weather);
