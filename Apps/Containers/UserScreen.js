import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  Keyboard,
} from "react-native";

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
  const userState = useSelector((state) => state.user);
  const userData = userState.user;

  const [userNameInput, setUserNameInput] = useState(userData?.userName);
  const [userEmail, setUserEmail] = useState(userData?.email);
  const [userPhone, setUserPhone] = useState(userData?.phone);
  const [userGender, setUserGender] = useState(userData?.gender);
  const [userDoB, setUserDoB] = useState(userData?.birthday);

  const onChangeTextUserName = (text) => {
    setUserNameInput(text);
  };

  const onChangeTextEmai = (text) => {
    setUserEmail(text);
  };

  const onChangeTextPhone = (text) => {
    setUserPhone(text);
  };

  const onChangeTextGender = (text) => {
    setUserGender(text);
  };

  const onChangeTextDoB = (text) => {
    setUserDoB(text);
  };

  const onPressBack = () => {
    navigation.goBack();
  };

  const onPressSave = () => {
    const userData = {
      userNameInput,
      userEmail,
      userPhone,
      userGender,
      userDoB,
    };

    Keyboard.dismiss();
    dispatch(editUser({ editUserData: userData }));
    navigation.goBack();
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
          rightIconPress={onPressSave}
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
            placeholder={"Nhap ten di"}
            title={"User name"}
            onChangeText={(text) => onChangeTextUserName(text)}
            value={userNameInput}
          />
          <TDTextInput
            placeholder={"nhap email di"}
            title={"Email"}
            onChangeText={(text) => onChangeTextEmai(text)}
            value={userEmail}
          />
          <TDTextInput
            placeholder={"nhap phone do"}
            title={"Phone"}
            onChangeText={(text) => onChangeTextPhone(text)}
            value={userPhone}
          />
          <TDTextInput
            placeholder={"gioi tinh la gi"}
            title={"Gender"}
            onChangeText={(text) => onChangeTextGender(text)}
            value={userGender}
          />
          <TDTextInput
            placeholder={"ngay sinh"}
            title={"Birthday"}
            onChangeText={(text) => onChangeTextDoB(text)}
            value={userDoB}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default UserScreen;
