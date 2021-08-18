import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Feather } from "@expo/vector-icons";
import Statusbar from "../components/Statusbar";
import Marker from "../components/Marker";
import MapView from "react-native-maps";

export default function FavoritesMapScreen({ coords, favorites }) {
  const navigation = useNavigation();

  return (
    <View>
      <Statusbar style={{ backgroundColor: "#523383" }} />
      <View>
        <Text style={styles.title}>Favoris</Text>
        <TouchableOpacity
          style={styles.arrow}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate("Favorites");
          }}
        >
          <Feather name="arrow-left" size={35} color="white" />
        </TouchableOpacity>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
        showsUserLocation={true}
      >
        {favorites.map((place) => {
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
              <MapView.Callout
                tooltip
                style={styles.customView}
                onPress={() => {
                  navigation.navigate("Restaurant", { item: place });
                }}
              >
                <Image source={{ uri: place.thumbnail }} style={styles.img} />
                <View style={{ paddingHorizontal: 10 }}>
                  <Text style={styles.name}>{place.name}</Text>
                  <Text numberOfLines={3}>{place.description}</Text>
                </View>
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  arrow: {
    position: "absolute",
    top: 10,
    left: 15,
  },
  title: {
    backgroundColor: "#6E3FAC",
    textAlign: "center",
    lineHeight: 60,
    color: "white",
    fontSize: 22,
    fontWeight: "500",
  },
  map: {
    height: Dimensions.get("window").height - 128,
    width: "100%",
  },
  marker: {
    width: 36,
    height: 46,
  },
  customView: {
    backgroundColor: "white",
    borderRadius: 15,
    height: 200,
    width: 200,
  },
  img: {
    width: 200,
    height: 90,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginBottom: 10,
  },
  name: {
    fontWeight: "700",
    fontSize: 15,
    marginBottom: 5,
  },
});
