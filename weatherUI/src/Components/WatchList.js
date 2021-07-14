import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import { connect } from "react-redux";
import {
  getCurrentWeather,
  getForecastWeather,
} from "../Redux/Actions/Actions";
// import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./Card_Items";
import axios from "axios";
import Search_Modal from "./Search_Modal";
import Carousel from "react-native-snap-carousel";

const WatchList = (props) => {
  const [watchCities, setWatchCities] = useState([]);
  const [finalData, setFinalData] = useState([]);
  var findWatch = [];
  async function getAllUrls(cities) {
    try {
      const data = await Promise.all(
        cities.map((city) =>
          fetch(`http://10.59.96.38:4002/current/${city}`).then((response) =>
            response.json()
          )
        )
      );
      console.log("watchlist data");
      console.log("data" + JSON.stringify(data));
      console.log("Watch " + findWatch);
      data.forEach(function (element, index) {
        element.place = findWatch[index];
      });

      setFinalData(data);
      // console.log(JSON.stringify(data[3].place));

      return data;
    } catch (error) {
      console.log(error);

      throw error;
    }
  }

  useEffect(() => {
    axios({
      url: "http://10.59.96.38:4002/graphql",
      method: "post",
      data: {
        query: `
                   {
                    user(userId:"60e4a1e64808e0206c76926a"){
                     name
                     email
                     watchList
                    }
                   }
                   `,
      },
    })
      .then((res) => {
        // console.log(JSON.stringify(res.data.data.user.watchList));
        setWatchCities(res.data.data.user.watchList);
        findWatch = res.data.data.user.watchList;
        getAllUrls(res.data.data.user.watchList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log("Final" + JSON.stringify(finalData));
  const Weather = [
    {
      image: require("../Screens/Home/assets/card1.png"),
      weather: "Heavy Rain",
      weath_Im: require("../Screens/Home/assets/rain.png"),
      Time: "Morning",
      Temp: "29 °",
      Qu: "Feels Like 30 °",
      Day: "Today 14-02-2021",
    },
    {
      image: require("../Screens/Home/assets/card2.png"),
      weather: "Cloudy",
      weath_Im: require("../Screens/Home/assets/cloudy.png"),
      Time: "Morning",
      Temp: "25 °",
      Qu: "Feels Like 15 °",
      Day: "Yesterday 13-02-2021",
    },
    {
      image: require("../Screens/Home/assets/card3.png"),
      weather: "Heavy Rain",
      weath_Im: require("../Screens/Home/assets/rain.png"),
      Time: "Morning",
      Temp: "27 °",
      Qu: "Feels Like 30 °",
      Day: "Ereyesterday 12-02-2021",
    },
    {
      image: require("../Screens/Home/assets/card4.png"),
      weather: "Sunny",
      weath_Im: require("../Screens/Home/assets/sunny.png"),
      Time: "Morning",
      Temp: "45 °",
      Qu: "Feels Like 50 °",
      Day: "Today 15-02-2021",
    },
  ];

  // Forecast Data Rendering

  const forecast_precip = !props.forecast.weather_forecast
    ? null
    : props.forecast.weather_forecast[0].HasPrecipitation === false
    ? "No Rain"
    : "Rain";

  const forecast_temp = !props.forecast.weather_forecast ? null : (
    <Text style={{ color: "red" }}>
      {props.forecast.weather_forecast[0].Temperature.Value}
    </Text>
  );

  const { width, height } = Dimensions.get("window");

  const carouselRef = useRef(null);

  const RenderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback>
        <View>
          <ImageBackground
            source={item.image}
            style={{
              width: 360,
              height: 240,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
            borderRadius={10}
          >
            <View style={{ alignItems: "center" }}>
              <Text
                style={{ color: "#ffffff", fontWeight: "bold", fontSize: 25 }}
              >
                Watch List
                {/* {MyCity} */}
              </Text>
              <Text
                style={{ color: "#ffffff", fontWeight: "600", fontSize: 15 }}
              >
                {console.log("data1111" + item.place)}
                {/* {curr_date} */}
                {/* {item.Day} */}
              </Text>
              <View>
                <Text
                  style={{ color: "#ffffff", fontWeight: "bold", fontSize: 25 }}
                >
                  {item.Temperature.Value}
                  {/* {item.weather} */}
                </Text>
                <Text
                  style={{ color: "#ffffff", fontWeight: "600", fontSize: 15 }}
                >
                  {forecast_precip}
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  fontSize: 25,
                  textAlign: "center",
                }}
              >
                {forecast_temp}&deg;F
                {/* {curr_temp} */}
                {/* {item.Temp} */}
              </Text>
              <Text
                style={{ color: "#ffffff", fontWeight: "600", fontSize: 15 }}
              >
                Temperature
                {/* {item.Qu} */}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  fontSize: 25,
                  textAlign: "center",
                }}
              >
                {forecast_temp}&deg;F
                {/* {curr_temp} */}
                {/* {item.Temp} */}
              </Text>
              <Text
                style={{ color: "#ffffff", fontWeight: "600", fontSize: 15 }}
              >
                Weather
                {/* {item.Qu} */}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  fontSize: 25,
                  textAlign: "center",
                }}
              >
                {forecast_temp}&deg;F
                {/* {curr_temp} */}
                {/* {item.Temp} */}
              </Text>
              <Text
                style={{ color: "#ffffff", fontWeight: "600", fontSize: 15 }}
              >
                Precipitation
                {/* {item.Qu} */}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View>
      <Text style={{ fontSize: 26, color: "#fff" }}>My Watch List</Text>
      {/* Carousel */}
      <View>
        <Search_Modal />
        <Carousel
          // layout={'tinder'}
          ref={carouselRef}
          data={finalData}
          renderItem={RenderItem}
          sliderWidth={width}
          itemWidth={width - 10}
          swipeThreshold={100}
          layoutCardOffset={-12}
          inactiveSlideOpacity={0.4}
          containerCustomStyle={{
            overflow: "visible",
            marginVertical: 30,
          }}
        />
      </View>
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    //From Combined Reducer
    weather: state.weather,
    forecast: state.forecast,
  };
};

export default connect(mapStateToProps, {
  getCurrentWeather: getCurrentWeather,
  getForecastWeather: getForecastWeather,
})(WatchList);
