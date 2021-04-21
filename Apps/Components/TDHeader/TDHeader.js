import React from "react";
import { Text, View } from "react-native";

// styles
import styles from "./Styles/TDHeaderStyles";

// componenst
import { TDIconButton } from "../../Components/TDButton";

export default function TDHeader({
  title,
  leftIconSource,
  rightIconSource,
  leftIconPress,
  rightIconPress,
  titleStyle,
}) {
  const renderIcon = () => {
    if (leftIconSource) {
      return (
        <TDIconButton
          imgSource={leftIconSource}
          btnStyle={styles.iconButton}
          onPressButton={leftIconPress}
        />
      );
    }
  };

  return (
    <View style={styles.header}>
      {renderIcon()}
      <Text style={[styles.textHead, titleStyle]}>{title}</Text>
      {rightIconSource && (
        <TDIconButton
          imgSource={rightIconSource}
          btnStyle={styles.iconButton}
          onPressButton={rightIconPress}
        />
      )}
    </View>
  );
}
