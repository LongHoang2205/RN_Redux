import React from "react";
import { Text, View } from "react-native";

// styles
import styles from "./Styles/TDHeaderStyles";

// themes
import { Images, Metrics, Colors } from "../../Themes";

export default function TDHeader({ title }) {
  return (
    <View style={styles.head}>
      <Text style={styles.textHead}>{title}</Text>
    </View>
  );
}
