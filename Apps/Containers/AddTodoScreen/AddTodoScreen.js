import React, { useState } from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";

// styles
import styles from "../../../styles";

// components
import { TDTextInput, TDHeader, TDIconButton } from "../../Components";

//redux
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../Redux/Actions/index";

// themes
import { Images, Colors, Metrics } from "../../Themes";

function AddTodoScreen({ navigation }) {
  const onPressBack = () => {
    navigation.goBack();
  };

  const dispatch = useDispatch();

  const addTodoState = useSelector((state) => state);

  const [taskNameInput, setTaskNameInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const addTodoPress = () => {
    dispatch(addTodo({ taskName: "task 1", description: "description ne" }));
    navigation.goBack();
  };

  const onChangeTextTaskName = (text) => {
    setTaskNameInput(text);
  };

  const onChangeTextDescription = (text) => {
    setDescriptionInput(text);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}></SafeAreaView>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <View style={{ position: "absolute", left: 20 }}>
            <TDIconButton img={Images.delete} onPressButton={addTodoPress} />
          </View>
          <TDHeader title={"Add Todo"} />
          <View style={{ position: "absolute", right: 20 }}>
            <TDIconButton img={Images.submit} onPressButton={addTodoPress} />
          </View>
        </View>
        <TDTextInput
          title={"TaskName"}
          onChangeText={(text) => onChangeTextTaskName(text)}
        />
        <TDTextInput
          title={"Description"}
          onChangeText={(text) => onChangeTextDescription(text)}
        />
        <TDIconButton img={Images.back} onPressButton={onPressBack} />
      </ScrollView>
    </View>
  );
}

export default AddTodoScreen;
