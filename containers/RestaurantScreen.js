import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation, useRoute } from "@react-navigation/core";
import Constants from "expo-constants";
import FavoriteHeart from "../components/FavoriteHeart";
import MapView from "react-native-maps";
import colorTheme from "../components/colorTheme";
import Marker from "../components/Marker";
import RestaurantButtons from "../components/RestaurantButtons";
import RestaurantHeader from "../components/RestaurantHeader";

export default function RestaurantScreen({
  coords,
  favorites,
  storeFavorites,
}) {
  const { params } = useRoute();

  const {
    pictures,
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

  const navigation = useNavigation();

  let firstPictures = [];

  if (pictures.length > 0) {
    for (let i = 0; i < 7; i++) {
      if (pictures[i]) {
        firstPictures.push(pictures[i]);
      }
    }
  } else {
    firstPictures.push(thumbnail);
  }

  return (
    <ScrollView>
      <View>
        <SliderBox
          images={firstPictures}
          activeOpacity={1}
          dotColor={colorTheme(type)}
          style={styles.image}
        />
        <Image
          source={require("../assets/Rectangle.png")}
          style={styles.shadow}
          pointerEvents="none"
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
        <FavoriteHeart
          storeFavorites={storeFavorites}
          favorites={favorites}
          params={params}
        />
      </View>
      <RestaurantHeader
        rating={rating}
        link={link}
        type={type}
        name={name}
        location={location}
        coords={coords}
      />
      <RestaurantButtons phone={phone} type={type} />
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
    height: 120,
    width: "100%",
  },
  arrow: {
    position: "absolute",
    top: Constants.statusBarHeight + 10,
    left: 15,
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
});
