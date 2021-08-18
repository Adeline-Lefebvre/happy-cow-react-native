import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import Constants from "expo-constants";

export default function SplashScreen() {
  return (
    <View style={styles.splashScreen}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  splashScreen: {
    backgroundColor: "#78B537",
    height: Dimensions.get("window").height + Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 300,
  },
});
