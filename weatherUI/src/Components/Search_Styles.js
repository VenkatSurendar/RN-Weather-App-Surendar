import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderRadius: 10,
    width: 200,
    borderWidth: 0.5,
  },
  modalView: {
    width: 360,
    height: 600,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 0,
    elevation: 3,
    marginLeft: 280,
    flexDirection: "row",
  },
  buttonOpen: {
    width: 80,
    height: 45,
    backgroundColor: "white",
  },
  buttonClose: {
    position: "absolute",
    bottom: 0,
    marginBottom: 10,
    // backgroundColor: "white",
    // backgroundColor: "#2196F3",
  },
  textStyle: {
    // display: "flex",
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default styles;
