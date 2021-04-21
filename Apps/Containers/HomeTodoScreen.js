import React from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  Platform,
  StatusBar,
} from "react-native";

// styles
import styles from "../../styles";

// components
import { TDTodoListItem, TDHeader, TDIconButton } from "../Components";

// themes
import { Images, Colors, Metrics } from "../Themes";

//redux
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../Redux/Actions/index";

function Todo({ navigation }) {
  const dispatch = useDispatch();
  const addTodoState = useSelector((state) => state.todo);
  const todoListInStore = addTodoState.tasks;

  const onPressMove = () => {
    navigation.navigate("AddTodoScreen");
  };

  const onPessDelete = (item) => {
    dispatch(removeTodo({ item }));
  };

  const onPessItemList = (item) => {
    navigation.navigate("AddTodoScreen", { title: "Edit todo", item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <TDHeader
          title={"Todo List"}
          rightIconPress={onPressMove}
          rightIconSource={Images.add}
          titleStyle={styles.titleheader}
        />
        {/* Luon them key cho flatlist (key khong duoc trung nhau) */}
        <FlatList
          data={todoListInStore}
          renderItem={({ item, index }) =>
            TDTodoListItem(item, index, onPessItemList, onPessDelete)
          }
          keyExtractor={(item, index) => item.id + index}
          style={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
}

export default Todo;
