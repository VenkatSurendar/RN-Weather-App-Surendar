import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Animated,
  FlatList,
  TextInput,
  Button,
  Share,
  StatusBar,
  ImageBackground,
} from "react-native";
import { connect } from "react-redux";
import {
  getCurrentWeather,
  getForecastWeather,
  searchCity,
} from "../../Redux/Actions/Actions";

import styles from "./Home_Styles.js";

import Modal_Comp from "../../Components/Modal";
import Search_Modal from "../../Components/Search_Modal";
// import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./Card_Items";
import Current_Weather from "./Current_Weather.js";
import WatchList from "../../Components/WatchList";
import share from "../../Media/share.png";

// Install These Packages
import Carousel from "react-native-snap-carousel";

// From Expo
import Icon from "react-native-vector-icons/MaterialIcons";

const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        "React Native | A framework for building native apps using React",
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

const Home_Screen = (props) => {
  const Cities = [
    {
      key: "1",
      cityImage: require("./assets/kolkata.webp"),
      cityName: "Kolkata",
    },
    {
      key: "2",
      cityImage: require("./assets/nagpur.jpg"),
      cityName: "Nagpur",
    },
    {
      key: "3",
      cityImage: require("./assets/pune.jpg"),
      cityName: "Pune",
    },
    {
      key: "4",
      cityImage: require("./assets/delhi.jpg"),
      cityName: "Delhi",
    },
    {
      key: "5",
      cityImage: require("./assets/mumbai.jpg"),
      cityName: "Mumbai",
    },
  ];

  // Carousel data

  const Weather = [
    {
      image: require("../Home/assets/card1.png"),
      weather: "Heavy Rain",
      // weath_Im: require("./assets/rain.png"),
      Time: "Morning",
      Temp: "29 °",
      Qu: "Feels Like 30 °",
      Day: "Today 14-02-2021",
    },
    {
      image: require("../Home/assets/card1.png"),
      weather: "Cloudy",
      // weath_Im: require("./assets/cloudy.png"),
      Time: "Morning",
      Temp: "25 °",
      Qu: "Feels Like 15 °",
      Day: "Yesterday 13-02-2021",
    },
    {
      image: require("../Home/assets/card1.png"),
      weather: "Heavy Rain",
      // weath_Im: require("./assets/rain.png"),
      Time: "Morning",
      Temp: "27 °",
      Qu: "Feels Like 30 °",
      Day: "Ereyesterday 12-02-2021",
    },
    {
      image: require("../Home/assets/card1.png"),
      weather: "Sunny",
      // weath_Im: require("./assets/sunny.png"),
      Time: "Morning",
      Temp: "45 °",
      Qu: "Feels Like 50 °",
      Day: "Today 15-02-2021",
    },
  ];

  const [index, setIndex] = useState(0);

  // if (!props.forecast.weather_forecast[0]) {
  //   return null;
  // } else {
  //   var arr_forecast = props.forecast.weather_forecast[0].Temperature.Value;
  // }

  console.log(JSON.stringify(props.forecast.weather_forecast));

  // const { width, height } = Dimensions.get("window");
  // const carouselRef = useRef(null);

  // const [City_Input, setCity_Input] = useState();
  // const handleSearch = () => {
  //   console.log("Handle search");
  //   props.getCurrentWeather(City_Input);
  //   console.log(City_Input);
  //   props.navigation.navigate("Home");
  // };

  // const curr_precip = !props.weather.weather_info
  //   ? null
  //   : props.weather.weather_info[0].HasPrecipitation === false
  //   ? "No Rain"
  //   : "Rain";

  // const curr_weather = !props.weather.weather_info ? null : (
  //   <Text style={{ color: "black" }}>
  //     {props.weather.weather_info[0].WeatherText}
  //   </Text>
  // );
  // const curr_date = !props.weather.weather_info ? null : (
  //   <Text style={{ color: "black" }}>
  //     {props.weather.weather_info[0].EpochTime}
  //   </Text>
  // );
  // const curr_temp = !props.weather.weather_info ? null : (
  //   <Text style={{ color: "black" }}>
  //     {props.weather.weather_info[0].Temperature.Metric.Value}
  //   </Text>
  // );

  // // Forecast Data Rendering

  // const forecast_precip = !props.forecast.weather_forecast
  //   ? null
  //   : props.forecast.weather_forecast[0].HasPrecipitation === false
  //   ? "No Rain"
  //   : "Rain";

  // const forecast_temp = !props.forecast.weather_forecast ? null : (
  //   <Text style={{ color: "red" }}>
  //     {props.forecast.weather_forecast[0].Temperature.Value}
  //   </Text>
  // );

  // City
  // const MyCity = !props.MySearchCity ? null : (
  //   <Text style={{ color: "red" }}>{props.MySearchCity}</Text>
  // );

  console.log(props.MySearchCity);

  // SLIDING PANEL

  // const [dragRange, setDragRange] = useState({
  //   top: height - 80,
  //   bottom: 160,
  // });

  const _draggedValue = new Animated.Value(180);

  const ModalRef = useRef(null);

  return (
    <View backgroundColor="black" style={styles.container}>
      {/* <StatusBar backgroundColor="black" barStyle="light-content" /> */}

      <View style={{ paddingHorizontal: 14 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* <Button title="Weather" onPress={handlePress} /> */}
          <View>
            <TouchableOpacity style={{ marginLeft: 280 }} onPress={onShare}>
              <Image source={share} />
            </TouchableOpacity>
            {/* <View style={{ flexDirection: "row" }}> */}
            {/* <Button onPress={onShare} title="Share" /> */}

            {/* <Text style={{ fontSize: 26, color: "#fff" }}>Mumbai</Text> */}
            {/* <Icon
                name="keyboard-arrow-down"
                color="white"
                size={28}
                style={{ alignSelf: "center" }}
              /> */}
            {/* </View> */}
          </View>
        </View>
        <Current_Weather />
        {/* <Search_Modal /> */}
        <WatchList />
        <Modal_Comp />

        <View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.AddCity}>
              <View style={styles.AddCityIconbg}>
                {/* <Icon
                  name="add"
                  color="white"
                  size={28}
                  style={{ alignSelf: "center" }}
                /> */}
              </View>
              {/* <Text style={{ color: "#fff" }}>Hourly Forecast</Text> */}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    //From Combined Reducer
    weather: state.weather,
    forecast: state.forecast,
    MySearchCity: state.searchCity,
  };
};

export default connect(mapStateToProps, {
  getCurrentWeather: getCurrentWeather,
  getForecastWeather: getForecastWeather,
  searchCity: searchCity,
})(Home_Screen);
