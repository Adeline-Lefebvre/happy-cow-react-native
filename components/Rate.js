import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Rating } from "react-native-elements";
import { Linking } from "react-native";

const Rate = ({ rating, link, bgColor, reviewColor }) => {
  const styles = StyleSheet.create({
    rating: {
      alignItems: "flex-start",
      marginTop: 10,
      flexDirection: "row",
    },
    reviews: {
      color: reviewColor,
      fontSize: 12,
      textDecorationLine: "underline",
      marginLeft: 5,
    },
  });

  return (
    <View style={styles.rating}>
      <Rating
        imageSize={14}
        readonly
        startingValue={rating}
        type="custom"
        ratingBackgroundColor="#F0F0F0"
        tintColor={bgColor}
      />
      <Text style={styles.reviews} onPress={() => Linking.openURL(link)}>
        Reviews
      </Text>
    </View>
  );
};

export default Rate;
