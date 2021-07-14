import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
} from "react-native";
import styles from "./Modal_Styles.js";
import { connect } from "react-redux";
import {
  // getCurrentWeather,
  getForecastWeather,
} from "../Redux/Actions/Actions";

const Modal_Comp = (props) => {
  const forecast_precip = !props.forecast.weather_forecast
    ? null
    : props.forecast.weather_forecast[0].HasPrecipitation === false
    ? "No Rain"
    : "Rain";

  const Item = ({
    EpochDateTime,
    IconPhrase,
    HasPrecipitation,
    Temperature,
    PrecipitationProbability,
  }) => (
    <View style={styles.item}>
      <Text style={styles.title}>Time:{EpochDateTime}</Text>
      <Text style={styles.title}>Weather:{IconPhrase}</Text>
      <Text style={styles.title}>Precipitation:{forecast_precip}</Text>
      <Text style={styles.title}>Temperature:{Temperature.Value}&deg;F</Text>
      <Text style={styles.title}>
        Precipitation Probability:{PrecipitationProbability}
      </Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item
      EpochDateTime={item.EpochDateTime}
      IconPhrase={item.IconPhrase}
      HasPrecipitation={item.HasPrecipitation}
      Temperature={item.Temperature}
      PrecipitationProbability={item.PrecipitationProbability}
    />
  );

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <Text style={{ fontSize: 26, color: "#fff" }}>Hourly Forecast</Text>
        <FlatList
          data={props.forecast.weather_forecast}
          renderItem={renderItem}
          keyExtractor={(item) => item.EpochDateTime}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    //From Combined Reducer
    // weather: state.weather,
    forecast: state.forecast,
  };
};

export default connect(mapStateToProps, {
  // getCurrentWeather: getCurrentWeather,
  getForecastWeather: getForecastWeather,
})(Modal_Comp);
