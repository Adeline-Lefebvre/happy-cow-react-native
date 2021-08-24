import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const SearchBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchBar}>
      <TouchableOpacity
        style={styles.input}
        onPress={() => {
          navigation.navigate("Search");
        }}
        activeOpacity="0.9"
      >
        <Entypo
          name="compass"
          size={24}
          color="gray"
          style={{ marginRight: 10 }}
        />
        <Text style={{ color: "gray" }}>A proximité</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#6E3FAC",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 5,
    margin: 10,
    marginTop: 0,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
});
