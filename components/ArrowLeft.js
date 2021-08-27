import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Feather } from "@expo/vector-icons";

const ArrowLeft = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.arrow}
      activeOpacity={0.8}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Feather name="arrow-left" size={32} color="white" />
    </TouchableOpacity>
  );
};

export default ArrowLeft;

const styles = StyleSheet.create({
  arrow: {
    position: "absolute",
    top: 12,
    left: 15,
  },
});
