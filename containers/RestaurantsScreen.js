import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/core";
import { AntDesign } from "@expo/vector-icons";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import RestaurantsList from "../components/RestaurantsList";
import Statusbar from "../components/Statusbar";

export default function RestaurantsScreen({ coords }) {
  let [filters, setFilters] = useState({});
  let [displayAll, setDisplayAll] = useState(true);

  const { params } = useRoute();

  const handleFilters = (filter) => {
    setFilters({
      ...filters,
      [filter]: !filters[filter],
    });
  };

  if (params) {
    console.log(params);
  }

  useEffect(() => {
    if (Object.values(filters).every((x) => x === false)) {
      setDisplayAll(true);
    } else {
      setDisplayAll(false);
    }
  }, [filters]);

  return (
    <View>
      <Statusbar style={{ backgroundColor: "#523383" }} />
      <View>
        <Header btn="map" />
        <SearchBar />
        <View style={styles.filters}>
          <TouchableOpacity
            style={filters.vegan ? styles.veganFilter : styles.filter}
            onPress={() => {
              handleFilters("vegan");
            }}
          >
            <Image
              source={require("../assets/Icons/vegan.png")}
              style={styles.icon}
            />
            <Text
              style={
                filters.vegan ? styles.filterTitleWhite : styles.filterTitle
              }
            >
              Vegan
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={filters.vegetarian ? styles.vegetarianFilter : styles.filter}
            onPress={() => {
              handleFilters("vegetarian");
            }}
          >
            <Image
              source={require("../assets/Icons/vegetarian.png")}
              style={styles.icon}
            />
            <Text
              style={
                filters.vegetarian
                  ? styles.filterTitleWhite
                  : styles.filterTitle
              }
            >
              Végétarien
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              filters["veg-options"] ? styles.vegOptionsFilter : styles.filter
            }
            onPress={() => {
              handleFilters("veg-options");
            }}
          >
            <Image
              source={require("../assets/Icons/veg-options.png")}
              style={styles.icon}
            />
            <Text
              numberOfLines={1}
              style={
                filters["veg-options"]
                  ? styles.filterTitleWhite
                  : styles.filterTitle
              }
            >
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
        <RestaurantsList
          coords={coords}
          filters={filters}
          displayAll={displayAll}
          keyword={params.keyword}
        />
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
  veganFilter: {
    backgroundColor: "#479C5E",
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
  vegetarianFilter: {
    backgroundColor: "#9B49A0",
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
  vegOptionsFilter: {
    backgroundColor: "#E17675",
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
  filterTitle: {
    fontSize: 12,
    fontWeight: "500",
  },
  filterTitleWhite: {
    fontSize: 12,
    fontWeight: "500",
    color: "white",
  },
});
