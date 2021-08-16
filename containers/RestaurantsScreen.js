import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import RestaurantsList from "../components/RestaurantsList";

export default function RestaurantsScreen() {
  return (
    <View style={styles.skipStatusBar}>
      <Header btn="map" />
      <SearchBar />
      <RestaurantsList />
    </View>
  );
}

const styles = StyleSheet.create({
  skipStatusBar: {
    paddingTop: Constants.statusBarHeight,
  },
});
