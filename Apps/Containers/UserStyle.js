import { StyleSheet, Platform, StatusBar } from "react-native";
import { Metrics, Images, Colors } from "../Themes";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#000051",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  titleheaderAddNewTask: {
    flex: 1,
    textAlign: "center",
    color: "white",
  },
  headerContainer: {
    borderRadius: 0,
    backgroundColor: "#000051",
  },
  btnUser: {
    backgroundColor: "white",
  },
  inputStyle: {
    borderRadius: 0,
    backgroundColor: "white",
    borderColor: "#aeaeae",
    borderBottomWidth: 1,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  textInputStyle: {
    color: "#aeaeae",
  },
});
