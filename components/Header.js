import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import MapIcon from "../components/MapIcon";

const Header = ({ btn }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Image source={require("../assets/logo-white.png")} style={styles.logo} />
      {btn === "map" ? (
        <MapIcon nav="Map" />
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
