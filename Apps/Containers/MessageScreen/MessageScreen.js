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

//styles
import styles from "./Styles/MessageStyle";

//themes
import { Images, Colors, Metrics } from "../../Themes";

const userMessageList = [
  {
    id: 1,
    username: "you",
    messageContent: "Hello, co gi dui hong",
  },
  {
    id: 2,
    username: "me",
    messageContent: "Hello, hong co gi dui",
  },
  {
    id: 3,
    username: "you",
    messageContent: "eeee",
  },
  {
    id: 4,
    username: "you",
    messageContent: "an com chua",
  },
  {
    id: 5,
    username: "me",
    messageContent: "roi ak",
  },
];

function MessageScreen({ navigation, route }) {
  const [message, setMessage] = useState("");
  const [listMessage, setListMessage] = useState(userMessageList);

  const onChangeMessage = (text) => {
    setMessage(text);
  };

  const sendMessage = () => {
    listMessage.push({
      id: userMessageList.length + 1,
      username: "me",
      messageContent: message,
    });
    setMessage("");
    Keyboard.dismiss();
  };

  const onPressBack = () => {
    navigation.goBack();
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
            <Text style={styles.name}>Henna Beck</Text>
            <Text style={styles.status}>online</Text>
          </View>
          <View style={styles.right}>
            <TDIconButton imgSource={Images.phone} />
            <TDIconButton imgSource={Images.search} />
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <FlatList
          data={listMessage}
          renderItem={({ item, index }) => TDMessageListItem(item, index)}
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
          <TDIconButton imgSource={Images.sticker} />
        </View>
        <View style={styles.rightFooter}>
          <TDIconButton imgSource={Images.micro} onPressButton={sendMessage} />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default MessageScreen;
