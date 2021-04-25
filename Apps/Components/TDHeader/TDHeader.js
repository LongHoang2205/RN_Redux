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
  headerContainer,
  btnUser,
  iconStyle,
}) {
  const renderIcon = () => {
    if (leftIconSource) {
      return (
        <TDIconButton
          imgSource={leftIconSource}
          btnStyle={[styles.iconButton, btnUser]}
          onPressButton={leftIconPress}
          iconStyle={iconStyle ? iconStyle : { tintColor: "black" }}
        />
      );
    }
  };

  return (
    <View style={[styles.header, headerContainer]}>
      {renderIcon()}
      <Text style={[styles.textHead, titleStyle]}>{title}</Text>
      {rightIconSource && (
        <TDIconButton
          imgSource={rightIconSource}
          btnStyle={styles.iconButton}
          onPressButton={rightIconPress}
          iconStyle={iconStyle ? iconStyle : { tintColor: "black" }}
        />
      )}
    </View>
  );
}
