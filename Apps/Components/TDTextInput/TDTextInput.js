import React, { Component } from "react";
import { View, TextInput, Text } from "react-native";

// styles
import styles from "./Styles/TDTextInputStyle";

class TDTextInput extends Component {
  render() {
    const { placeholder, onChangeText, title, value } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="gray"
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
      </View>
    );
  }
}

export default TDTextInput;
