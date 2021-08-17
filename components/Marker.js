import React from "react";
import { Image } from "react-native";

const Marker = ({ type, style }) => {
  let marker;

  if (type === "Veg Store") {
    marker = require(`../assets/markers/Veg-Store.png`);
  } else if (type === "Health Store") {
    marker = require(`../assets/markers/Health-Store.png`);
  } else if (type === "Ice Cream") {
    marker = require(`../assets/markers/Ice-Cream.png`);
  } else if (type === "Juice Bar") {
    marker = require(`../assets/markers/Juice-Bar.png`);
  } else if (type === "Bakery") {
    marker = require(`../assets/markers/Bakery.png`);
  } else if (type === "Catering") {
    marker = require(`../assets/markers/Catering.png`);
  } else if (type === "Delivery") {
    marker = require(`../assets/markers/Delivery.png`);
  } else if (type === "Organization") {
    marker = require(`../assets/markers/Organization.png`);
  } else if (type === "Other") {
    marker = require(`../assets/markers/Other.png`);
  } else if (type === "Professional") {
    marker = require(`../assets/markers/Professional.png`);
  } else if (type === "veg-options") {
    marker = require(`../assets/markers/veg-options.png`);
  } else if (type === "vegan") {
    marker = require(`../assets/markers/vegan.png`);
  } else if (type === "vegetarian") {
    marker = require(`../assets/markers/vegetarian.png`);
  } else {
    marker = require(`../assets/markers/vegetarian.png`);
  }

  return <Image source={marker} style={style} />;
};

export default Marker;
