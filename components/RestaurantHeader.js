import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { getDistance } from "geolib";
import Icon from "../components/Icon";
import Rate from "../components/Rate";
import colorTheme from "./colorTheme";

const RestaurantHeader = ({ rating, link, type, name, location }) => {
  const distance = (
    getDistance(
      { latitude: 48.857559, longitude: 2.352021 },
      { latitude: location.lat, longitude: location.lng }
    ) / 1000
  ).toFixed(2);

  const styles = StyleSheet.create({
    blueBar: {
      backgroundColor: colorTheme(type),
      height: 110,
      padding: 15,
    },
    category: {
      position: "absolute",
      right: 30,
      top: -28,
      alignItems: "center",
    },
    icon: {
      height: 56,
      width: 56,
    },
    title: {
      color: "white",
      fontWeight: "500",
      textTransform: "uppercase",
      marginTop: 10,
      textAlign: "center",
    },
    distance: {
      color: "white",
      marginTop: 20,
      textAlign: "center",
      fontWeight: "500",
    },
    name: {
      color: "white",
      fontSize: 18,
      fontWeight: "600",
    },
  });

  return (
    <View>
      <View style={styles.blueBar}>
        <Text style={styles.name}>{name}</Text>
        <Rate
          rating={rating}
          link={link}
          bgColor={colorTheme(type)}
          reviewColor="white"
        />
      </View>
      <View style={styles.category}>
        <Icon type={type} style={styles.icon} />
        <Text style={styles.title}>{type}</Text>
        <Text style={styles.distance}>{distance} km</Text>
      </View>
    </View>
  );
};

export default RestaurantHeader;
