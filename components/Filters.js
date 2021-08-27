import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Filters = ({ filters, handleFilters }) => {
  return (
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
          style={filters.vegan ? styles.filterTitleWhite : styles.filterTitle}
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
            filters.vegetarian ? styles.filterTitleWhite : styles.filterTitle
          }
        >
          Végétarien
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={filters["veg-options"] ? styles.vegOptionsFilter : styles.filter}
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
        <AntDesign name="filter" size={24} color="gray" style={styles.icon} />
        <Text style={styles.filterTitle}>Filtres</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Filters;

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
