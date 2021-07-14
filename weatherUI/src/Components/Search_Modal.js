import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { connect } from "react-redux";
import {
  getCurrentWeather,
  getForecastWeather,
  searchCity,
} from "../Redux/Actions/Actions";
import search from "../Media/search.png";
import styles from "./Search_Styles";

const Search_Modal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [city, setCity] = React.useState("");
  const [cities, setCities] = useState([]);

  const handleSearch = () => {
    console.log("Handle search");
    props.getCurrentWeather(city);
    props.getForecastWeather(city);
    props.searchCity(city);
    console.log(city);
    //props.navigation.navigate("Home");
    setModalVisible(!modalVisible);
  };
  const fetchCities = (city) => {
    console.log("fetchnig");
    setCity(city);
    fetch(
      `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?q=${city}&apikey=vPTgGSRDsAgsnTWpgYBQ5BLrGopgJnO4`
    )
      .then((item) => item.json())
      .then((cityData) => {
        console.log(cityData);
        setCities(cityData);
      });
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              placeholder="Search Location"
              style={styles.input}
              value={city}
              onChangeText={(city) => fetchCities(city)}
            />
            <TouchableOpacity>
              <Text>Add to Watch List</Text>
            </TouchableOpacity>

            <Button title="Search" color="#841584" onPress={handleSearch} />
            {/* <Text style={styles.modalText}>Hello World!</Text> */}
            <FlatList
              data={cities}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={{ margin: 2, padding: 12 }}
                    onPress={() => setCity(item.LocalizedName)}
                  >
                    <Text>{`${item.LocalizedName}, ${item.AdministrativeArea.LocalizedName},  ${item.Country.LocalizedName}`}</Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item.name}
            />
            <TouchableOpacity
              style={[styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Image source={search} />

        <Text style={styles.textStyle}>Search</Text>
      </Pressable>
    </View>
  );
};

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22,
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderRadius: 10,
//     width: 200,
//     borderWidth: 0.5,
//   },
//   modalView: {
//     width: 300,
//     height: 600,
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     width: 80,
//     height: 45,
//     backgroundColor: "white",
//   },
//   buttonClose: {
//     position: "absolute",
//     bottom: 0,
//     marginBottom: 10,
//     // backgroundColor: "white",
//     // backgroundColor: "#2196F3",
//   },
//   textStyle: {
//     color: "black",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center",
//   },
// });

const mapStateToProps = (state) => {
  return {
    //From Combined Reducer
    weather: state.weather,
    // MySearchCity: state.searchCity,
    forecast: state.forecast,
  };
};

export default connect(mapStateToProps, {
  getCurrentWeather: getCurrentWeather,
  getForecastWeather: getForecastWeather,
  //searchCity is for taking the input city
  // and storing in store.
  searchCity: searchCity,
  // getForecastWeather: getForecastWeather,
})(Search_Modal);
