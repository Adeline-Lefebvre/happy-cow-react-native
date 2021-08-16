import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <View style={styles.input}>
        <Entypo
          name="compass"
          size={24}
          color="gray"
          style={{ marginRight: 10 }}
        />
        <TextInput placeholder="A proximité"></TextInput>
      </View>
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
