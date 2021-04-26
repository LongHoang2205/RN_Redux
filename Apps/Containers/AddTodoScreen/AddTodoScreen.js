import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  KeyboardType,
} from "react-native";

// styles
import styles from "../../../styles";

// components
import { TDTextInput, TDHeader, TDIconButton } from "../../Components";

//redux
import { useSelector, useDispatch } from "react-redux";
import { addTodo, editTodo } from "../../Redux/Actions/index";

// themes
import { Images, Colors, Metrics } from "../../Themes";

function AddTodoScreen({ route, navigation }) {
  // param tu navigation chuc nang edit
  const titleHeader = route?.params?.title;
  const item = route?.params?.item;

  const dispatch = useDispatch();
  const addTodoState = useSelector((state) => state);
  const [taskNameInput, setTaskNameInput] = useState(
    titleHeader ? item.taskName : ""
  );
  const [descriptionInput, setDescriptionInput] = useState(
    titleHeader ? item.description : ""
  );

  const addTodoPress = () => {
    // them task vi, them task ko truyen param title
    // nen titleheader se undentifi (false)
    if (!titleHeader) {
      const taskName = taskNameInput ? taskNameInput : "task has not name";
      dispatch(
        addTodo({ taskName: taskNameInput, description: descriptionInput })
      );
    } else {
      dispatch(
        editTodo({
          item,
          taskName: taskNameInput,
          description: descriptionInput,
        })
      );
      console.log("edit todo day:", item);
    }

    navigation.goBack();
  };

  const onChangeTextTaskName = (text) => {
    setTaskNameInput(text);
  };

  const onChangeTextDescription = (text) => {
    setDescriptionInput(text);
  };

  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <TDHeader
          title={"Add new task"}
          rightIconPress={addTodoPress}
          rightIconSource={titleHeader ? Images.save : Images.add}
          titleStyle={styles.titleheaderAddNewTask}
          leftIconPress={onPressBack}
          leftIconSource={Images.back}
        />
        <TDTextInput
          placeholder={"add your task name"}
          title={"Name"}
          onChangeText={(text) => onChangeTextTaskName(text)}
          value={taskNameInput}
        />
        <TDTextInput
          placeholder={"add your description"}
          title={"Description"}
          onChangeText={(text) => onChangeTextDescription(text)}
          value={descriptionInput}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default AddTodoScreen;
