import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// styles
import styles from "../../../styles";

// themes
import { Images } from "../../Themes";

// comonents
import { TDIconButton } from "../TDButton";

function TDMessageListItem(item, index, onPressDelete, onPressUpdate) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "pink",
        marginHorizontal: 20,
        borderRadius: 20,
        padding: 20,
        marginBottom: 10,
      }}
    >
      <Text>Hi Henna, how you</Text>
    </TouchableOpacity>
  );
}
export default TDMessageListItem;
