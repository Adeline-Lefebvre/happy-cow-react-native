import React from "react";
import { StyleSheet, View, Text, FlatList, ScrollView } from "react-native";
import restaurants from "../assets/happyCowRestaurants.json";
import RestaurantCard from "./RestaurantCard";

const RestaurantsList = () => {
  return (
    <View>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => String(item.placeId)}
        renderItem={({ item }) => {
          return <RestaurantCard item={item} />;
        }}
      />
    </View>
  );
};

export default RestaurantsList;

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#6E3FAC",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 5,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
});
