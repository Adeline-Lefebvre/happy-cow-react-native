import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import MapIcon from "../components/MapIcon";

const Header = ({ btn, setToken }) => {
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
      <Entypo
        name="log-out"
        size={26}
        color="white"
        style={styles.logoutBtn}
        onPress={() => {
          setToken(null);
        }}
      />
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
    right: 15,
  },
  logoutBtn: {
    lineHeight: 50,
    width: 60,
    textAlign: "center",
    position: "absolute",
    left: 0,
  },
});
