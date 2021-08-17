import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import Icon from "./Icon";
import { Rating } from "react-native-elements";
import { Linking } from "react-native";
import { getDistance } from "geolib";

const RestaurantCard = ({ item, coords }) => {
  const { thumbnail, name, type, rating, description, link, location } = item;

  const navigation = useNavigation();

  const distance = (
    getDistance(
      { latitude: coords.latitude, longitude: coords.longitude },
      { latitude: location.lat, longitude: location.lng }
    ) / 1000
  ).toFixed(2);

  return (
    <TouchableOpacity
      style={styles.restaurantCard}
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate("Restaurant", { item: item, distance: distance });
      }}
    >
      <Image source={{ uri: thumbnail }} style={styles.image} />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
        <Icon type={type} style={styles.icon} />
        <View style={styles.rating}>
          <Rating
            imageSize={14}
            readonly
            startingValue={rating}
            type="custom"
            ratingBackgroundColor="#F0F0F0"
          />
          <Text style={styles.reviews} onPress={() => Linking.openURL(link)}>
            Reviews
          </Text>
        </View>
        <Text style={styles.distance}>{distance} km</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  restaurantCard: {
    backgroundColor: "white",
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
  icon: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 25,
    height: 25,
  },
  description: {
    position: "absolute",
    bottom: 5,
  },
  rating: {
    alignItems: "flex-start",
    marginTop: 10,
    flexDirection: "row",
  },
  reviews: {
    color: "gray",
    fontSize: 12,
    textDecorationLine: "underline",
    marginLeft: 5,
  },
  distance: {
    color: "gray",
    fontSize: 12,
    position: "absolute",
    right: 0,
    top: 28,
  },
});
