import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import RestaurantsList from "../components/RestaurantsList";
import Statusbar from "../components/Statusbar";

export default function RestaurantsScreen({ coords }) {
  return (
    <View>
      <Statusbar style={{ backgroundColor: "#523383" }} />
      <View>
        <Header btn="map" />
        <SearchBar />
        <RestaurantsList coords={coords} />
      </View>
    </View>
  );
}
