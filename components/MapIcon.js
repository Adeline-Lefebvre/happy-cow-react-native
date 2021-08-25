import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Feather } from "@expo/vector-icons";

const MapIcon = ({ nav }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.map}
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate(nav);
      }}
    >
      <Feather name="map" size={24} color="white" />
    </TouchableOpacity>
  );
};

export default MapIcon;

const styles = StyleSheet.create({
  map: {
    position: "absolute",
    top: 17,
    right: 15,
  },
});
