/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions} from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 24,
    flex: 1,
    color: "#000",
    alignItems: "center",
    lineHeight: 23,
  },
  containerStyle: {
    marginTop: 0.06 * height,
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  tabStyle: {
    marginTop: 30,
  },
  icon: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
});
export { styles };