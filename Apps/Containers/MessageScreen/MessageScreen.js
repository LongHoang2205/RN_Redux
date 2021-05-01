import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Keyboard,
  FlatList,
  TextInput,
} from "react-native";

//components
import { TDTextInput, TDHeader, TDIconButton } from "../../Components";
import TDIconButtonStyle from "../../Components/TDButton/TDIconButton/Styles/TDIconButtonStyle";
import { TDMessageListItem } from "../../Components/TDMessageList.js/index.js";

import {
  addMessage,
  editMessage,
  removeMessage,
} from "../../Redux/Actions/index";
//styles
import styles from "./Styles/MessageStyle";

//redux
import { useSelector, useDispatch } from "react-redux";

//themes
import { Images, Colors, Metrics } from "../../Themes";

function MessageScreen({ navigation, route }) {
  // const [listMessage, setListMessage] = useState(userMessageList);
  const dispatch = useDispatch();
  //const item = route?.params?.item;
  const userState = useSelector((state) => state.message);
  const messageData = userState.addMessage;
  const [message, setMessage] = useState(messageData?.messageContent);
  const [isEditMessage, setIsEditMessage] = useState(false);

  const [itemPicked, setitemPicked] = useState(null);

  const onChangeMessage = (text) => {
    setMessage(text);
  };

  const onPressSend = () => {
    if (isEditMessage) {
      dispatch(editMessage({ itemPicked, messageContent: message }));
    } else {
      dispatch(addMessage({ messageContent: message }));
    }
  };

  const onPressItem = (item) => {
    // console.log(item);
    setIsEditMessage(true);
    setMessage(item.messageContent);
    setitemPicked(item);
  };

  const onPressRightHeaderIcon = () => {
    if (isEditMessage) {
      setIsEditMessage(false);
      setMessage();
    }
  };

  const onPressBack = () => {
    navigation.goBack();
  };

  const onPressDelete = (item) => {
    setIsEditMessage(true);
    setitemPicked(item);
    dispatch(removeMessage({ itemPicked }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TDHeader
          headerContainer={styles.headerContainer}
          rightIconPress={() => {}}
          rightIconSource={Images.menu}
          titleStyle={styles.titleheaderAddNewTask}
          leftIconPress={onPressBack}
          leftIconSource={Images.back}
          iconStyle={{ tintColor: "black" }}
        />
        <View style={styles.me}>
          <View style={styles.left}>
            <TDIconButton
              imgSource={{
                uri:
                  "https://afamilycdn.com/150157425591193600/2020/6/17/10412201938741747726524279144254310954691829o-15923704404661764223890-1592379481982-159237948209593938679.jpg",
              }}
            />
          </View>
          <View style={styles.center}>
            <Text style={styles.name}>
              {isEditMessage ? "Edit message" : "Send message"}
            </Text>
            <Text style={styles.status}>online</Text>
          </View>
          <View style={styles.right}>
            <TDIconButton imgSource={Images.phone} />
            <TDIconButton
              onPressButton={onPressRightHeaderIcon}
              imgSource={isEditMessage ? Images.delete : Images.search}
            />
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <FlatList
          data={messageData}
          renderItem={({ item, index }) =>
            TDMessageListItem(item, index, onPressItem, onPressDelete)
          }
          keyExtractor={(item, index) => item.id + index}
        />
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.leftFooter}>
          <TDIconButton imgSource={Images.tag} />
        </View>
        <View style={styles.centerFooter}>
          <TextInput
            placeholder={"Message"}
            style={{ flex: 1 }}
            onChangeText={(text) => onChangeMessage(text)}
            value={message}
          />
          <TDIconButton
            imgSource={Images.sticker}
            onPressButton={onPressSend}
          />
        </View>
        <View style={styles.rightFooter}>
          <TDIconButton
            imgSource={isEditMessage ? Images.delete : Images.micro}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default MessageScreen;
