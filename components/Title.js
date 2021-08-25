import React from "react";
import { StyleSheet, Text } from "react-native";

const Title = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    backgroundColor: "#6E3FAC",
    textAlign: "center",
    lineHeight: 60,
    color: "white",
    fontSize: 22,
    fontWeight: "500",
  },
});
