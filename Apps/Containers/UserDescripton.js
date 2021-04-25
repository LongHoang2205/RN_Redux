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

  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <TDHeader
          title={"User Description"}
          rightIconPress={() => {}}
          rightIconSource={titleHeader ? Images.save : Images.add}
          titleStyle={styles.titleheaderAddNewTask}
          leftIconPress={onPressBack}
          leftIconSource={Images.back}
          rightIconPress={() => {
            alert("save");
          }}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 25,
          }}
        >
          <Text>USER NAME:</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default UserScreen;
