import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const RestaurantCard = ({ item }) => {
  const { thumbnail, name, type, rating, description } = item;

  let icon;

  if (type === "Veg Store") {
    icon = require(`../assets/Icons/Veg-Store.png`);
  } else if (type === "Health Store") {
    icon = require(`../assets/Icons/Health-Store.png`);
  } else if (type === "Ice Cream") {
    icon = require(`../assets/Icons/Ice-Cream.png`);
  } else if (type === "Juice Bar") {
    icon = require(`../assets/Icons/Juice-Bar.png`);
  } else if (type === "Food Truck") {
    icon = require(`../assets/Icons/Food-Truck.png`);
  } else if (type === "Market Vendor") {
    icon = require(`../assets/Icons/Market-Vendor.png`);
  } else if (type === "B&B") {
    icon = require(`../assets/Icons/B&B.png`);
  } else if (type === "Bakery") {
    icon = require(`../assets/Icons/Bakery.png`);
  } else if (type === "Catering") {
    icon = require(`../assets/Icons/Catering.png`);
  } else if (type === "Delivery") {
    icon = require(`../assets/Icons/Delivery.png`);
  } else if (type === "Organization") {
    icon = require(`../assets/Icons/Organization.png`);
  } else if (type === "Other") {
    icon = require(`../assets/Icons/Other.png`);
  } else if (type === "Professional") {
    icon = require(`../assets/Icons/Professional.png`);
  } else if (type === "veg-options") {
    icon = require(`../assets/Icons/veg-options.png`);
  } else if (type === "vegan") {
    icon = require(`../assets/Icons/vegan.png`);
  } else if (type === "vegetarian") {
    icon = require(`../assets/Icons/vegetarian.png`);
  } else {
    icon = require(`../assets/Icons/vegetarian.png`);
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
      <Image source={icon} style={styles.icon} />
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
    fontSize: 14,
    fontWeight: "500",
  },
  description: {
    position: "absolute",
    bottom: 0,
  },
  icon: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 25,
    height: 25,
  },
});
