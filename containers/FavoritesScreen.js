import React from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Feather } from "@expo/vector-icons";
import Statusbar from "../components/Statusbar";
import RestaurantCard from "../components/RestaurantCard";

export default function FavoritesScreen({ favorites, coords }) {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Statusbar style={{ backgroundColor: "#523383" }} />
      <View>
        <Text style={styles.title}>Favoris</Text>
        <TouchableOpacity
          style={styles.arrow}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate("Restaurants");
          }}
        >
          <Feather name="arrow-left" size={35} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.map}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate("FavoritesMap");
          }}
        >
          <Feather name="map" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {favorites.map((place) => {
        return (
          <RestaurantCard item={place} coords={coords} key={place.placeId} />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  arrow: {
    position: "absolute",
    top: 10,
    left: 15,
  },
  title: {
    backgroundColor: "#6E3FAC",
    textAlign: "center",
    lineHeight: 60,
    color: "white",
    fontSize: 22,
    fontWeight: "500",
  },
  map: {
    position: "absolute",
    top: 17,
    right: 15,
  },
});
