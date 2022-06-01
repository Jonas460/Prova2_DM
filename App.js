import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import React, { useState } from "react";
import BookCard from "./bookCard";

export default function App() {
  const [book, setBook] = useState(null);
  const [search, setSearch] = useState(null);

  const getBookData = (title) => {
    const endpoint = `https://hn.algolia.com/api/v1/search?query=${title}/`;

    fetch(endpoint)
      .then((resposta) => resposta.json())
      .then((data) => {
        const products = data.hits;
        setBook(products);
      });
  };
  onStarRatingPress = (rating) => {
    setStars(rating);
  };

  return (
    <View>
      <View style={styles.top}>
        <Text style={styles.topTitle}>Livraria</Text>
      </View>
      <ScrollView>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar por titulo"
          onChangeText={(newText) => setSearch(newText)}
          defaultValue={search}
        />
        <Button title="Pesquisar" onPress={() => getBookData(search)} />
        {book?.map((books) => (
          <BookCard
            key={books.objectID}
            title={books.title}
            author={books.author}
            url={books.url}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "#000",
    height: 40,
    textAlign: "center",
    marginBottom: 12,
  },
  top: {
    padding: 20,
    paddingTop: 40,
    marginBottom: 20,
    backgroundColor: "#5671A8",
  },
  topTitle: {
    fontSize: 22,
    marginBottom: 10,
    color: "#fff",
    textAlign: "center",
  },
});
