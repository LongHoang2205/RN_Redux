import React from "react";
import { View, Text } from "react-native";

function TDTodoListItem(item, index) {
  return (
    <View
      style={{
        backgroundColor: "white",
        marginHorizontal: 20,
        marginVertical: 3,
        borderRadius: 20,
        padding: 20,
      }}
    >
      <Text>{item.taskName}</Text>
      <Text>{item.description}</Text>
    </View>
  );
}
export default TDTodoListItem;
