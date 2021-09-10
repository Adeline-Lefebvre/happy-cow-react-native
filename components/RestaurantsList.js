import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import { useRoute } from "@react-navigation/core";
import Constants from "expo-constants";
import restaurants from "../assets/happyCowRestaurants.json";
import RestaurantCard from "./RestaurantCard";

const RestaurantsList = ({ coords, filters, displayAll }) => {
  const [filteredPlaces, setFilteredPlaces] = useState(restaurants);

  const route = useRoute();
  let keyword = route.params;
  if (!keyword) {
    keyword = "";
  }

  useEffect(() => {
    const filterPlaces = () => {
      let newFilteredPlaces = [];

      for (let i = 0; i < restaurants.length; i++) {
        if (
          (displayAll &&
            (keyword.length <= 0 ||
              restaurants[i].name.search(keyword) >= 0)) ||
          (filters[restaurants[i].type] &&
            (keyword.length <= 0 || restaurants[i].name.search(keyword) >= 0))
        ) {
          newFilteredPlaces.push(restaurants[i]);
        }
      }

      setFilteredPlaces(newFilteredPlaces);
    };
    filterPlaces();
  }, [displayAll, filters, keyword]);

  return (
    <View
      style={{
        height:
          Dimensions.get("window").height - Constants.statusBarHeight - 240,
      }}
    >
      <FlatList
        data={filteredPlaces}
        keyExtractor={(item) => String(item.placeId)}
        renderItem={({ item }) => (
          <RestaurantCard item={item} coords={coords} />
        )}
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
