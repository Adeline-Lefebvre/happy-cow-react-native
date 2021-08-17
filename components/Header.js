import React from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const Header = ({ btn }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Image source={require("../assets/logo-white.png")} style={styles.logo} />
      {btn === "map" ? (
        <Feather
          name="map"
          size={24}
          color="white"
          style={styles.btn}
          onPress={() => {
            navigation.navigate("Map");
          }}
        />
      ) : (
        <Entypo
          name="list"
          size={30}
          color="white"
          style={styles.btn}
          onPress={() => {
            navigation.navigate("Restaurants");
          }}
        />
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6E3FAC",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  logo: {
    width: 140,
    height: 25,
  },
  btn: {
    lineHeight: 50,
    textAlign: "center",
    position: "absolute",
    right: 12,
  },
});
