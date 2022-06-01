import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import StarRating from "react-native-star-rating";

export default function BookCard(props) {
  const [rate, setRate] = useState(0);

  const onStarRatingPress = (rating) => {
    setRate(rating);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text>
          <Text style={styles.title}>Autor: </Text>
          <Text style={styles.text}>{props.author}</Text>
        </Text>
        <Text>
          <Text style={styles.title}>Titulo: </Text>
          <Text style={styles.text}>{props.title}</Text>
        </Text>
        <Text>
          <Text style={styles.title}>Url: </Text>
          <Text style={styles.text}> {props.url}</Text>
        </Text>
        <StarRating
          disabled={false}
          maxStars={5}
          selectedStar={(rate) => onStarRatingPress(rate)}
          rating={rate}
          starStyle={styles.star}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  star: {
    color: "#FFD800",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cardContainer: {
    backgroundColor: "#5671A8",
    borderRadius: 4,
    marginTop: 10,
    marginHorizontal: 20,
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: "#fff",
  },
  title: {
    fontWeight: "700",
    color: "#ffffff",
  },
});
