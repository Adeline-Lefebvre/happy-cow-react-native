import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Linking,
} from "react-native";
import { FontAwesome5, MaterialIcons, Ionicons } from "@expo/vector-icons";
import colorTheme from "./colorTheme";

const RestaurantButtons = ({ phone, type }) => {
  const styles = StyleSheet.create({
    icons: {
      backgroundColor: colorTheme(type),
      width: 55,
      height: 55,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 30,
      marginBottom: 10,
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
  });

  return (
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
  );
};

export default RestaurantButtons;
