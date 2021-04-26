import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// styles
import styles from "../../../styles";

// themes
import { Images, Colors } from "../../Themes";

// comonents
import { TDIconButton } from "../TDButton";

function TDMessageListItem(
  item,
  index,
  onPressItem,
  onPressDelete,
  onPressUpdate
) {
  const userName = item?.username;
  return userName === "me" ? (
    <TouchableOpacity
      onPress={() => onPressItem(item)}
      style={{
        backgroundColor: "pink",
        marginHorizontal: 20,
        borderRadius: 20,
        padding: 20,
        marginBottom: 10,
        marginRight: 90,
        alignSelf: "flex-start",
      }}
    >
      <Text>{item.messageContent}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={() => onPressItem(item)}
      style={{
        backgroundColor: Colors.blueLight,
        marginHorizontal: 20,
        borderRadius: 20,
        padding: 20,
        marginBottom: 10,
        marginLeft: 90,
        alignSelf: "flex-end",
      }}
    >
      <Text>{item.messageContent}</Text>
      <TDIconButton
        imgSource={Images.delete}
        onPressButton={() => onPressDelete(item)}
      />
    </TouchableOpacity>
  );
}
export default TDMessageListItem;
