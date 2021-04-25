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
import styles from "../Containers/UserStyle";

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
          headerContainer={styles.headerContainer}
          title={"Edit Profile"}
          rightIconPress={() => {}}
          rightIconSource={titleHeader ? Images.save : Images.add}
          titleStyle={styles.titleheaderAddNewTask}
          leftIconPress={onPressBack}
          leftIconSource={Images.back}
          rightIconPress={onPressSave}
          iconStyle={{ tintColor: "white" }}
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
              source={{
                uri:
                  "https://afamilycdn.com/150157425591193600/2020/6/17/10412201938741747726524279144254310954691829o-15923704404661764223890-1592379481982-159237948209593938679.jpg",
              }}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                backgroundColor: "red",
                borderRadius: 20,
              }}
            >
              <TouchableOpacity
                style={{ width: 40, height: 40, justifyContent: "center" }}
              >
                <Image
                  source={require("../Images/icons/camera.png")}
                  style={{
                    width: 20,
                    height: 20,
                    alignSelf: "center",
                    tintColor: "white",
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: "white" }}>
          <TDTextInput
            placeholder={"Nhap ten di"}
            title={"User name"}
            onChangeText={(text) => onChangeTextUserName(text)}
            value={userNameInput}
            inputStyle={styles.inputStyle}
            textInputStyle={styles.textInputStyle}
          />
          <TDTextInput
            placeholder={"nhap email di"}
            title={"Email"}
            onChangeText={(text) => onChangeTextEmai(text)}
            value={userEmail}
            inputStyle={styles.inputStyle}
            textInputStyle={styles.textInputStyle}
          />
          <TDTextInput
            placeholder={"nhap phone do"}
            title={"Phone"}
            onChangeText={(text) => onChangeTextPhone(text)}
            value={userPhone}
            inputStyle={styles.inputStyle}
            textInputStyle={styles.textInputStyle}
          />
          <TDTextInput
            placeholder={"gioi tinh la gi"}
            title={"Gender"}
            onChangeText={(text) => onChangeTextGender(text)}
            value={userGender}
            inputStyle={styles.inputStyle}
            textInputStyle={styles.textInputStyle}
          />
          <TDTextInput
            placeholder={"ngay sinh"}
            title={"Birthday"}
            onChangeText={(text) => onChangeTextDoB(text)}
            value={userDoB}
            inputStyle={styles.inputStyle}
            textInputStyle={styles.textInputStyle}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default UserScreen;
