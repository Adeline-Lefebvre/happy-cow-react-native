import React, { useState } from "react";
import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import InputText from "../components/InputText";

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
      <InputText
        iconName="search"
        iconSize={22}
        iconColor="gray"
        placeholder="Nom ou mot-clé"
        onChangeText={setKeyword}
      />
      <InputText
        iconName="compass"
        iconSize={18}
        iconColor="gray"
        placeholder="Quelle ville visitez-vous?"
        onChangeText={setCity}
      />
    </SafeAreaView>
  );
}
