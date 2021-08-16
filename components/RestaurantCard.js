import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const RestaurantCard = ({ item }) => {
  const { thumbnail, name, rating, description } = item;
  return (
    <View style={styles.restaurantCard}>
      <Image source={{ uri: thumbnail }} style={styles.image} />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
      </View>
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
});
