import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import RestaurantsList from "../components/RestaurantsList";

export default function RestaurantsScreen({ coords }) {
  return (
    <View style={{ backgroundColor: "#523383" }}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="#00BCD4"
      />
      <View style={styles.skipStatusBar}>
        <Header btn="map" />
        <SearchBar />
        <RestaurantsList coords={coords} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  skipStatusBar: {
    paddingTop: Constants.statusBarHeight,
  },
});
