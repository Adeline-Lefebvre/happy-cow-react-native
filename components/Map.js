import React from "react";
import { StyleSheet, Image, View, Text, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/core";
import Marker from "../components/Marker";
import MapView from "react-native-maps";

const Map = ({ coords, places }) => {
  const navigation = useNavigation();

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 48.857559,
        longitude: 2.352021,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      }}
      showsUserLocation={true}
    >
      {places.map((place) => {
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
  );
};

export default Map;

const styles = StyleSheet.create({
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
