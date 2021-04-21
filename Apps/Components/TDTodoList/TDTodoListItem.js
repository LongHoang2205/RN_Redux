import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// styles
import styles from "../../../styles";

// themes
import { Images } from "../../Themes";

// comonents
import { TDIconButton } from "../TDButton";

function TDTodoListItem(item, index, onPessItem, onPessDelete) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        marginHorizontal: 20,
        borderRadius: 20,
        padding: 20,
        marginBottom: 10,
        flexDirection: "row",
      }}
      onPress={() => onPessItem(item)}
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          {item.taskName}
        </Text>
        <Text>{item.description}</Text>
      </View>
      <TDIconButton
        imgSource={Images.delete}
        onPressButton={() => onPessDelete(item)}
      />
    </TouchableOpacity>
  );
}
export default TDTodoListItem;
