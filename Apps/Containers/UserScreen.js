import React, { useState } from "react";
import { Text, View, ScrollView, SafeAreaView, Image } from "react-native";

// styles
import styles from "../../styles";

// components
import { TDTextInput, TDHeader, TDIconButton } from "../Components";

//redux
import { useSelector, useDispatch } from "react-redux";
import { addTodo, editTodo } from "../Redux/Actions/index";

// themes
import { Images, Colors, Metrics } from "../Themes";
import { TouchableOpacity } from "react-native-gesture-handler";

function UserScreen({ route, navigation }) {
  // param tu navigation chuc nang edit
  const titleHeader = route?.params?.title;
  const item = route?.params?.item;

  const dispatch = useDispatch();
  const addTodoState = useSelector((state) => state);
  const [userNameInput, setUserNameInput] = useState(
    titleHeader ? item.taskName : ""
  );
  const [descriptionInput, setDescriptionInput] = useState(
    titleHeader ? item.description : ""
  );

  const onChangeTextUserName = (text) => {
    setUserNameInput(text);
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
          title={"Edit Profile"}
          rightIconPress={() => {
            alert("save");
          }}
          rightIconSource={titleHeader ? Images.save : Images.add}
          titleStyle={styles.titleheaderAddNewTask}
          leftIconPress={onPressBack}
          leftIconSource={Images.back}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 25,
          }}
        >
          <View>
            <Image
              source={require("../Images/icons/user.png")}
              style={{ width: 100, height: 100 }}
            />
            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
              }}
            >
              <TouchableOpacity>
                <Image
                  source={require("../Images/icons/user.png")}
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: "green" }}>
          <TDTextInput
            placeholder={"Hoang Vu Long"}
            title={"User name"}
            onChangeText={(text) => onChangeTextUserName(text)}
            value={userNameInput}
          />
          <TDTextInput
            placeholder={"@gmail.com"}
            title={"Email"}
            onChangeText={(text) => onChangeTextUserName(text)}
            value={userNameInput}
          />
          <TDTextInput
            placeholder={"0xxxxxxxxx"}
            title={"Phone"}
            onChangeText={(text) => onChangeTextUserName(text)}
            value={userNameInput}
          />
          <TDTextInput
            placeholder={"Male"}
            title={"Gender"}
            onChangeText={(text) => onChangeTextUserName(text)}
            value={userNameInput}
          />
          <TDTextInput
            placeholder={"dd-mm-yyyy"}
            title={"Birthday"}
            onChangeText={(text) => onChangeTextUserName(text)}
            value={userNameInput}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default UserScreen;