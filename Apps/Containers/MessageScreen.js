import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";

//components
import { TDTextInput, TDHeader, TDIconButton } from "../Components";
import TDIconButtonStyle from "../Components/TDButton/TDIconButton/Styles/TDIconButtonStyle";
import { TDMessageListItem } from "../Components/TDMessageList.js";

//styles
import styles from "../Containers/MessageStyle";

//themes
import { Images, Colors, Metrics } from "../Themes";

function MessageScreen({ navigation, route }) {
  // param tu navigation chuc nang edit
  const titleHeader = route?.params?.title;
  const item = route?.params?.item;

  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentContainer}>
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
        <View style={styles.list}>
          {/* <FlatList
            data={[]}
            renderItem={({ item, index }) => TDMessageListItem(item, index)}
          /> */}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.leftFooter}>
          <TDIconButton imgSource={Images.tag} />
        </View>
        <View style={styles.centerFooter}>
          <TextInput placeholder={"Message"} style={{ padding: 150 }} />
          <TDIconButton imgSource={Images.sticker} />
        </View>
        <View style={styles.rightFooter}>
          <TDIconButton imgSource={Images.micro} />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default MessageScreen;
