import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const InputText = ({
  iconName,
  iconSize,
  iconColor,
  placeholder,
  onChangeText,
}) => {
  return (
    <View style={styles.textInput}>
      <Ionicons
        name={iconName}
        size={iconSize}
        color={iconColor}
        style={styles.icon}
      />
      <TextInput
        placeholder={placeholder}
        autoCompleteType="off"
        style={styles.text}
        onChangeText={(x) => onChangeText(x)}
      ></TextInput>
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  textInput: {
    marginTop: 25,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    marginHorizontal: 40,
    paddingBottom: 5,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: "gray",
    fontWeight: "500",
    fontSize: 16,
    width: 250,
  },
});
