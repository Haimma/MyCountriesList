/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  searchStyle: {
    flex: 1,
  },
  labelStyle: {
    fontSize: 24,
    flex: 1,
    color: "#000",
    paddingLeft: 20,
    lineHeight: 23,
  },
  containerStyle: {
    marginTop: 0.06 * height,
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
