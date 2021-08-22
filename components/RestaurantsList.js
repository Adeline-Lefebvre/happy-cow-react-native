import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import RestaurantCard from "./RestaurantCard";

const RestaurantsList = ({ coords, result }) => {
  return (
    <View>
      <FlatList
        data={result}
        keyExtractor={(item) => String(item.placeId)}
        renderItem={({ item }) => {
          return <RestaurantCard item={item} coords={coords} />;
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
