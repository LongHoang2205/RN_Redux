import React, { Component } from "react";
import { View, TextInput, Text } from "react-native";

// styles
import styles from "./Styles/TDTextInputStyle";

class TDTextInput extends Component {
  render() {
    const { placeholder, onChangeText, title } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="white"
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
        />
      </View>
    );
  }
}

export default TDTextInput;
