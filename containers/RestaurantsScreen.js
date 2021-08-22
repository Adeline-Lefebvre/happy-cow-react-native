import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import restaurants from "../assets/happyCowRestaurants.json";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import RestaurantsList from "../components/RestaurantsList";
import Statusbar from "../components/Statusbar";

export default function RestaurantsScreen({ coords }) {
  let [result, setResult] = useState(restaurants);
  let [activateFilters, setActivateFilters] = useState({
    vegan: true,
    vegetarian: true,
    vegOptions: true,
  });

  let filters = [];

  const handleFilters = (filter) => {
    setActivateFilters({
      ...activateFilters,
      [filter]: !activateFilters[filter],
    });

    for (i = 0; i < activateFilters.length; i++) {
      if (activateFilters[i]) {
        filters[i] = activateFilters.keys[i];
      }
    }

    setResult(
      restaurants.filter((place) => {
        for (i = 0; i < filters.length; i++) {
          place.type === filters[i];
        }
      })
    );
  };

  return (
    <View>
      <Statusbar style={{ backgroundColor: "#523383" }} />
      <View>
        <Header btn="map" />
        <SearchBar />
        <View style={styles.filters}>
          <TouchableOpacity
            style={styles.filter}
            onPress={() => {
              handleFilters("vegan");
            }}
          >
            <Image
              source={require("../assets/Icons/vegan.png")}
              style={styles.icon}
            />
            <Text style={styles.filterTitle}>Vegan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filter}
            onPress={() => {
              handleFilters("vegetarian");
            }}
          >
            <Image
              source={require("../assets/Icons/vegetarian.png")}
              style={styles.icon}
            />
            <Text style={styles.filterTitle}>Végétarien</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filter}
            onPress={() => {
              handleFilters("veg-options");
            }}
          >
            <Image
              source={require("../assets/Icons/veg-options.png")}
              style={styles.icon}
            />
            <Text numberOfLines={1} style={styles.filterTitle}>
              Options végétariennes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filter}>
            <AntDesign
              name="filter"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <Text style={styles.filterTitle}>Filtres</Text>
          </TouchableOpacity>
        </View>
        <RestaurantsList coords={coords} result={result} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  filters: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
  },
  filter: {
    backgroundColor: "white",
    height: 60,
    flex: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 2,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  icon: {
    height: 25,
    width: 25,
    marginBottom: 5,
  },
  filterTitle: {
    fontSize: 12,
    fontWeight: "500",
  },
});
