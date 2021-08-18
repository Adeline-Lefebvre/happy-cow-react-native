import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import Header from "../components/Header";
import Statusbar from "../components/Statusbar";
import Marker from "../components/Marker";
import MapView from "react-native-maps";
import restaurants from "../assets/happyCowRestaurants.json";

export default function MapScreen({ coords }) {
  const navigation = useNavigation();

  return (
    <View>
      <Statusbar style={{ backgroundColor: "#523383" }} />
      <Header btn="list" />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }}
        showsUserLocation={true}
      >
        {restaurants.map((place) => {
          return (
            <MapView.Marker
              key={place.placeId}
              coordinate={{
                latitude: place.location.lat,
                longitude: place.location.lng,
              }}
              title={place.name}
              description={place.description}
            >
              <Marker type={place.type} style={styles.marker} />
              <MapView.Callout tooltip style={styles.customView}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("restaurant", { item: place });
                  }}
                >
                  <View>
                    {/* <Image source={{ uri: place.thumbnail }} />
                    <Text style={{ fontWeight: "600", marginBottom: 10 }}>
                      {place.name}
                    </Text>
                    <Text numberOfLines={6}>{place.description}</Text> */}
                  </View>
                </TouchableOpacity>
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get("window").height - 128,
    width: "100%",
  },
  marker: {
    width: 36,
    height: 46,
    marginLeft: -18,
    marginTop: -46,
  },
  customView: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 15,
    height: 170,
    width: 180,
  },
});
