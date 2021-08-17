import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import RestaurantsList from "../components/RestaurantsList";

export default function RestaurantsScreen({ coords }) {
  return (
    <View style={{ backgroundColor: "#523383" }}>
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
