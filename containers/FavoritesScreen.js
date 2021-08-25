import React from "react";
import { ScrollView, View } from "react-native";
import Statusbar from "../components/Statusbar";
import RestaurantCard from "../components/RestaurantCard";
import ArrowLeft from "../components/ArrowLeft";
import Title from "../components/Title";
import MapIcon from "../components/MapIcon";

export default function FavoritesScreen({ favorites, coords }) {
  return (
    <ScrollView>
      <Statusbar style={{ backgroundColor: "#523383" }} />
      <View>
        <Title title="Favoris" />
        <ArrowLeft />
        <MapIcon nav="FavoritesMap" />
      </View>
      {favorites.map((place) => {
        return (
          <RestaurantCard item={place} coords={coords} key={place.placeId} />
        );
      })}
    </ScrollView>
  );
}
