import { StyleSheet, Platform, StatusBar } from "react-native";
import { Metrics, Images, Colors } from "../Themes";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  titleheaderAddNewTask: {
    flex: 1,
    textAlign: "center",
    color: "white",
  },
  headerContainer: {
    borderRadius: 0,
    backgroundColor: "white",
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
  name: {
    fontSize: Metrics.h3,
  },
  status: {
    color: "green",
  },
  me: {
    flexDirection: "row",
  },
  left: {
    paddingLeft: Metrics.baseMargin,
  },
  center: {
    justifyContent: "center",
  },
  right: {
    flexDirection: "row",
    position: "absolute",
    right: 10,
  },
  day: {
    justifyContent: "center",
    alignItems: "center",
  },
  dayText: {
    fontSize: Metrics.h3,
    color: "#aeaeae",
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 1,
    position: "absolute",
    bottom: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  leftFooter: {
    left: 10,
  },
  centerFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    backgroundColor: "#c7c7c7",
    borderRadius: 20,
    width: 220,
    height: 50,
    paddingLeft: 20,
  },
  rightFooter: {
    right: 10,
  },
});
