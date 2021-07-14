import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 0,
  },
  input: {
    color: "white",
    height: 40,
    margin: 12,
    borderWidth: 1,
  },

  City: {
    color: "red",
    width: 55,
    height: 55,
    // borderRadius: 10,
  },
  CityNotification: {
    height: 12,
    width: 12,
    backgroundColor: "#4853ef",
    borderRadius: 6,
    position: "absolute",
    right: 6,
    borderWidth: 2,
    borderColor: "#000",
  },
  AddCity: {
    height: 140,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0c0c0c",
    borderRadius: 10,
    marginRight: 14,
  },
  AddCityIconbg: {
    width: 70,
    height: 70,
    backgroundColor: "#000",
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
  },
  weth: {
    height: 100,
    width: 360,
    backgroundColor: "#F9F6F4",
    marginBottom: 20,
    marginTop: 10,
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default styles;
