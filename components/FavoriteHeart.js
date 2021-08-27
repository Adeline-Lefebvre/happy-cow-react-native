import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import Constants from "expo-constants";
import { Alert } from "react-native";

const FavoriteHeart = ({ storeFavorites, favorites, params }) => {
  const favorite = favorites.indexOf(params.item);

  return (
    <View style={styles.heart}>
      {favorite === -1 ? (
        <TouchableOpacity
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
  );
};

export default FavoriteHeart;

const styles = StyleSheet.create({
  heart: {
    position: "absolute",
    top: Constants.statusBarHeight + 12,
    right: 15,
  },
});
