import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import { useRoute } from "@react-navigation/core";
import {
  Feather,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { getDistance } from "geolib";
import Constants from "expo-constants";
import MapView from "react-native-maps";
import Icon from "../components/Icon";
import Rate from "../components/Rate";
import colorTheme from "../components/colorTheme";
import Marker from "../components/Marker";
import { Alert } from "react-native";

export default function RestaurantScreen({
  coords,
  favorites,
  storeFavorites,
}) {
  const { params } = useRoute();

  const {
    thumbnail,
    name,
    type,
    rating,
    description,
    link,
    location,
    address,
    phone,
  } = params.item;

  const distance = (
    getDistance(
      { latitude: coords.latitude, longitude: coords.longitude },
      { latitude: location.lat, longitude: location.lng }
    ) / 1000
  ).toFixed(2);

  const navigation = useNavigation();

  const backgroundColor = `backgroundColor: ${colorTheme(type)}`;

  const favorite = favorites.indexOf(params.item);

  return (
    <ScrollView>
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
            navigation.goBack();
          }}
        >
          <Feather name="arrow-left" size={35} color="white" />
        </TouchableOpacity>

        {favorite === -1 ? (
          <TouchableOpacity
            style={styles.heart}
            activeOpacity={0.8}
            onPress={() => {
              const newTab = [...favorites];
              newTab.push(params.item);
              storeFavorites(newTab);
              Alert.alert("Ajouté à la liste de favoris");
            }}
          >
            <Feather name="heart" size={25} color="white" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.heart}
            activeOpacity={0.8}
            onPress={() => {
              const newTab = [...favorites];
              newTab.splice(favorite, 1);
              storeFavorites(newTab);
              Alert.alert("Retiré de la liste de favoris");
            }}
          >
            <FontAwesome name="heart" size={25} color="white" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.blueBar}>
        <Text style={styles.name}>{name}</Text>
        <Rate rating={rating} link={link} bgColor="#9B49A0" />
      </View>
      <View style={styles.category}>
        <Icon type={type} style={styles.icon} />
        <Text style={styles.title}>{type}</Text>
        <Text style={styles.distance}>{distance} km</Text>
      </View>
      <View style={styles.btns}>
        <View style={styles.btn}>
          <View style={styles.icons}>
            <FontAwesome5 name="pen" size={20} color="white" />
          </View>
          <Text>Add Review</Text>
        </View>
        <View style={styles.btn}>
          <View style={styles.icons}>
            <MaterialIcons name="add-a-photo" size={24} color="white" />
          </View>
          <Text>Add Photos</Text>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.icons}
            onPress={() => Linking.openURL(`tel:${phone}`)}
          >
            <Ionicons name="call" size={24} color="white" />
          </TouchableOpacity>
          <Text>Call</Text>
        </View>
      </View>
      <Text style={styles.description}>{description}</Text>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        showsUserLocation={true}
      >
        <MapView.Marker
          coordinate={{
            latitude: location.lat,
            longitude: location.lng,
          }}
          title={name}
        >
          <Marker type={type} style={styles.marker} />
        </MapView.Marker>
      </MapView>
      <View style={styles.address}>
        <Text>{address}</Text>
      </View>
    </ScrollView>
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
  category: {
    position: "absolute",
    right: 30,
    top: 190,
    alignItems: "center",
  },
  icon: {
    height: 60,
    width: 60,
  },
  title: {
    color: "white",
    fontWeight: "600",
    textTransform: "uppercase",
    marginTop: 10,
    textAlign: "center",
  },
  distance: {
    color: "white",
    marginTop: 20,
    textAlign: "center",
    fontWeight: "600",
  },
  arrow: {
    position: "absolute",
    top: Constants.statusBarHeight + 10,
    left: 15,
  },
  heart: {
    position: "absolute",
    top: Constants.statusBarHeight + 12,
    right: 15,
  },
  blueBar: {
    backgroundColor: "#9B49A0",
    height: 110,
    padding: 15,
  },
  name: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
  description: {
    lineHeight: 25,
    padding: 15,
    backgroundColor: "white",
  },
  map: {
    height: 200,
    flex: 1,
  },
  address: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(249,245,237)",
  },
  marker: {
    width: 36,
    height: 46,
    marginLeft: -18,
    marginTop: -46,
  },
  btns: {
    height: 110,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
  btn: {
    alignItems: "center",
    width: 80,
  },
  icons: {
    backgroundColor: "purple",
    width: 55,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginBottom: 10,
  },
});
