import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Share,
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
  const [index, setIndex] = useState(0);

  console.log(JSON.stringify(props.forecast.weather_forecast));

  console.log(props.MySearchCity);

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
          </View>
        </View>
        <Current_Weather />
        {/* <Search_Modal /> */}
        <WatchList />
        <Modal_Comp />

        <View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.AddCity}>
              {/* <View style={styles.AddCityIconbg}> */}
              {/* <Icon
                  name="add"
                  color="white"
                  size={28}
                  style={{ alignSelf: "center" }}
                /> */}
              {/* </View> */}
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
