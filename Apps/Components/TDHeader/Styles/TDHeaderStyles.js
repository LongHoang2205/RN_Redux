import { StyleSheet } from "react-native";
import { Metrics, Images, Colors } from "../../../Themes";

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.safeArea,
  },
  header: {
    alignItems: "center",
    height: 60,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: Colors.pinkLight,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  textHead: {
    fontSize: Metrics.h2,
    color: Colors.background,
    fontWeight: "bold",
  },
  icons: {
    width: 20,
    height: 20,
  },
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
});
