import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

export default function SearchScreen({ setKeyword }) {
  const [city, setCity] = useState();

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginTop: 20,
        }}
      >
        <Entypo
          name="cross"
          size={30}
          color="purple"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Restaurants");
          }}
        >
          <Text style={{ fontSize: 20, color: "purple" }}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textInput}>
        <Ionicons name="search" size={22} color="gray" style={styles.icon} />
        <TextInput
          placeholder="Nom ou mot-clé"
          style={styles.text}
          onChangeText={(text) => {
            setKeyword(text);
          }}
        ></TextInput>
      </View>
      <View style={styles.textInput}>
        <Entypo name="compass" size={18} color="gray" style={styles.icon} />
        <TextInput
          placeholder="Quelle ville visitez-vous?"
          style={styles.text}
          onChangeText={(text) => {
            setCity(text);
          }}
          value={city}
        ></TextInput>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    marginTop: 25,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    marginHorizontal: 20,
    paddingBottom: 5,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: "gray",
    fontWeight: "500",
    fontSize: 18,
  },
});
