import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const RestaurantCard = ({ item }) => {
  const { thumbnail, name, type, rating, description } = item;

  if (type === "Veg Store") {
    const icon = require(`../assets/Icons/Veg-Store.png`);
  } else if (type === "Health Store") {
    const icon = require(`../assets/Icons/Health-Store.png`);
  } else if (type === "Ice Cream") {
    const icon = require(`../assets/Icons/Ice-Cream.png`);
  } else if (type === "Juice Bar") {
    const icon = require(`../assets/Icons/Juice-Bar.png`);
  } else if (type === "Food Truck") {
    const icon = require(`../assets/Icons/Food-Truck.png`);
  } else if (type === "Market Vendor") {
    const icon = require(`../assets/Icons/Market-Vendor.png`);
  } else {
    const icon = require(`../assets/Icons/${type}.png`);
  }

  return (
    <View style={styles.restaurantCard}>
      <Image source={{ uri: thumbnail }} style={styles.image} />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
      </View>
      <Image
        source={require("../assets/Icons/Veg-Store.png")}
        style={styles.icon}
      />
    </View>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  restaurantCard: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
  },
  description: {
    position: "absolute",
    bottom: 0,
  },
  icon: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 20,
    height: 20,
  },
});
