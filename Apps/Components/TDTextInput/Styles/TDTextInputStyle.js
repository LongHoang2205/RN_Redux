import { StyleSheet } from "react-native";
import { Metrics, Images, Colors } from "../../../Themes";

export default StyleSheet.create({
  container: {
    marginHorizontal: Metrics.doubleBaseMargin,
    marginVertical: Metrics.baseMargin,
  },
  title: {
    marginVertical: Metrics.baseMargin - 2,
    fontSize: Metrics.h5,
    color: Colors.black,
    marginLeft: 10,
    fontWeight: "bold",
  },
  input: {
    borderColor: Colors.white,
    height: 50,
    backgroundColor: Colors.pinkLight,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
});
