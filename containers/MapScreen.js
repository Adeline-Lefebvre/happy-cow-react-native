import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Header from "../components/Header";

export default function MapScreen() {
  return (
    <View style={styles.skipStatusBar}>
      <Header btn="list" />
    </View>
  );
}

const styles = StyleSheet.create({
  skipStatusBar: {
    paddingTop: Constants.statusBarHeight,
  },
});
