import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";

// styles
import styles from "./Styles/TDIconButtonStyle";

// theme
import { Images, Metrics, Colors } from "../../../Themes";

export default function TDIconButton({ onPressButton, btn, img }) {
  return (
    <TouchableOpacity style={[styles.buttonIcons, btn]} onPress={onPressButton}>
      <Image source={img} style={styles.icons} />
    </TouchableOpacity>
  );
}
