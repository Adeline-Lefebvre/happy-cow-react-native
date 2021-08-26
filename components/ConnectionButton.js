import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const ConnectionButton = ({ title, submitFunction }) => {
  const styles = StyleSheet.create({
    btn: {
      backgroundColor: "rgb(128,89,195)",
      marginHorizontal: 30,
      borderRadius: 10,
    },
    title: {
      color: "white",
      lineHeight: 42,
      textAlign: "center",
      fontWeight: "600",
      fontSize: 16,
    },
  });

  return (
    <TouchableOpacity
      style={styles.btn}
      activeOpacity={0.8}
      onPress={() => {
        submitFunction();
      }}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ConnectionButton;
