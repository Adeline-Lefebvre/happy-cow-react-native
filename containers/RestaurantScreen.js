import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/core";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import Icon from "../components/Icon";

export default function RestaurantScreen() {
  const { params } = useRoute();

  const { thumbnail, name, type, rating, description, link, location } =
    params.item;

  const navigation = useNavigation();

  return (
    <View>
      <View>
        <Image source={{ uri: thumbnail }} style={styles.image} />
        <Image
          source={require("../assets/Rectangle.png")}
          style={styles.shadow}
        />
        <TouchableOpacity
          style={styles.arrow}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate("Restaurants");
          }}
        >
          <Feather name="arrow-left" size={32} color="white" />
        </TouchableOpacity>
        <Feather name="heart" size={24} color="white" style={styles.heart} />
      </View>
      <Icon type={type} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 220,
  },
  shadow: {
    position: "absolute",
    height: 150,
    width: "100%",
  },
  icon: {
    position: "absolute",
    height: 60,
    width: 60,
    right: 30,
    bottom: -30,
  },
  arrow: {
    position: "absolute",
    top: 20,
    left: 15,
  },
  heart: {
    position: "absolute",
    top: 22,
    right: 15,
  },
});
