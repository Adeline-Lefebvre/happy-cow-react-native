import React from "react";
import { View } from "react-native";
import Statusbar from "../components/Statusbar";
import ArrowLeft from "../components/ArrowLeft";
import Title from "../components/Title";
import Map from "../components/Map";

export default function FavoritesMapScreen({ coords, favorites }) {
  return (
    <View>
      <Statusbar style={{ backgroundColor: "#523383" }} />
      <View>
        <Title title="Favoris" />
        <ArrowLeft />
      </View>
      <Map coords={coords} places={favorites} />
    </View>
  );
}
