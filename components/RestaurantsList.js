import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import restaurants from "../assets/happyCowRestaurants.json";
import RestaurantCard from "./RestaurantCard";

const RestaurantsList = ({ coords, filters, displayAll, keyword }) => {
  return (
    <View>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => String(item.placeId)}
        renderItem={({ item }) => {
          return displayAll ? (
            <RestaurantCard item={item} coords={coords} />
          ) : filters[item.type] && !keyword ? (
            <RestaurantCard item={item} coords={coords} />
          ) : filters[item.type] && item.name.search(keyword) >= 0 ? (
            <RestaurantCard item={item} coords={coords} />
          ) : null;
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
