import React, { useState } from "react";
import { Text, View, ScrollView, SafeAreaView, Image } from "react-native";

// styles
import styles from "../../styles";

// components
import { TDTextInput, TDHeader, TDIconButton } from "../Components";

//redux
import { useSelector, useDispatch } from "react-redux";
import { editUser } from "../Redux/Actions/index";

// themes
import { Images, Colors, Metrics } from "../Themes";
import { TouchableOpacity } from "react-native-gesture-handler";

function UserScreen({ route, navigation }) {
  // param tu navigation chuc nang edit
  const titleHeader = route?.params?.title;
  const item = route?.params?.item;

  const dispatch = useDispatch();
  const user = useSelector((state) => state.todo);
  const listUser = user.user;
  console.log(listUser);

  const [userNameInput, setUserNameInput] = useState(listUser.userName);
  const onChangeTextUserName = (text) => {
    setUserNameInput(text);
  };

  const onPressBack = () => {
    navigation.goBack();
  };

  const onPressMove = () => {
    dispatch(editUser({ listUser, userName: userNameInput }));
    navigation.navigate("UserDescription");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <TDHeader
          title={"Edit Profile"}
          rightIconPress={() => {}}
          rightIconSource={titleHeader ? Images.save : Images.add}
          titleStyle={styles.titleheaderAddNewTask}
          leftIconPress={onPressBack}
          leftIconSource={Images.back}
          rightIconPress={onPressMove}
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
            placeholder={listUser.userName}
            title={"User name"}
            onChangeText={(text) => onChangeTextUserName(text)}
            value={userNameInput}
          />
          <TDTextInput
            placeholder={listUser.email}
            title={"Email"}
            // onChangeText={(text) => onChangeTextUserName(text)}
            // value={userNameInput}
          />
          <TDTextInput
            placeholder={listUser.phone}
            title={"Phone"}
            // onChangeText={(text) => onChangeTextUserName(text)}
            // value={userNameInput}
          />
          <TDTextInput
            placeholder={listUser.gender}
            title={"Gender"}
            // onChangeText={(text) => onChangeTextUserName(text)}
            // value={userNameInput}
          />
          <TDTextInput
            placeholder={listUser.birthday}
            title={"Birthday"}
            // onChangeText={(text) => onChangeTextUserName(text)}
            // value={userNameInput}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default UserScreen;
