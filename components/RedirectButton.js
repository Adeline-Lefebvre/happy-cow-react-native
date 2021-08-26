import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/core";

const RedirectButton = ({ title, bgColor, color, screen }) => {
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    btn: {
      marginHorizontal: 30,
      borderRadius: 10,
      marginTop: 10,
    },
    title: {
      color: "rgb(128,89,195)",
      lineHeight: 42,
      textAlign: "center",
      fontWeight: "600",
      fontSize: 14,
    },
  });

  return (
    <TouchableOpacity
      style={styles.btn}
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate(screen);
      }}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RedirectButton;
