import React from "react";
import { View, SafeAreaView, FlatList } from "react-native";

// styles
import styles from "../../styles";

// components
import { TDTodoListItem, TDHeader, TDIconButton } from "../Components";

// themes
import { Images, Colors, Metrics } from "../Themes";

//redux
import { useSelector, useDispatch } from "react-redux";

function Todo({ navigation }) {
  const addTodoState = useSelector((state) => state.todo);
  const todoListInStore = addTodoState.tasks;

  const onPressMove = () => {
    navigation.navigate("AddTodoScreen");
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}></SafeAreaView>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <TDHeader title={"Todo List"} />
        <View style={{ position: "absolute", right: 20 }}>
          <TDIconButton onPressButton={onPressMove} img={Images.add} />
        </View>
      </View>
      <FlatList
        data={todoListInStore}
        renderItem={({ item, index }) => TDTodoListItem(item, index)}
      ></FlatList>
    </View>
  );
}

export default Todo;
