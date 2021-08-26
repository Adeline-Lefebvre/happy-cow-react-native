import React from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import Constants from "expo-constants";
import restaurants from "../assets/happyCowRestaurants.json";
import RestaurantCard from "./RestaurantCard";

const RestaurantsList = ({ coords, filters, displayAll, keyword }) => {
  return (
    <View
      style={{
        height:
          Dimensions.get("window").height - Constants.statusBarHeight - 240,
      }}
    >
      <FlatList
        data={restaurants}
        keyExtractor={(item) => String(item.placeId)}
        renderItem={({ item }) => {
          return displayAll && keyword.length <= 0 ? (
            <RestaurantCard item={item} coords={coords} />
          ) : displayAll && item.name.search(keyword) >= 0 ? (
            <RestaurantCard item={item} coords={coords} />
          ) : filters[item.type] && keyword.length <= 0 ? (
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
