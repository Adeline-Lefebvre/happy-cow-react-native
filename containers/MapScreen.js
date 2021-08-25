import React from "react";
import { View } from "react-native";
import Header from "../components/Header";
import Statusbar from "../components/Statusbar";
import restaurants from "../assets/happyCowRestaurants.json";
import Map from "../components/Map";

export default function MapScreen({ coords }) {
  return (
    <View>
      <Statusbar style={{ backgroundColor: "#523383" }} />
      <Header btn="list" />
      <Map coords={coords} places={restaurants} />
    </View>
  );
}
