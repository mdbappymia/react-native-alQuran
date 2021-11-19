import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Link } from "react-router-native";

export default function Home() {
  const [chapters, setChapters] = useState([]);
  useEffect(() => {
    fetch("https://api.quran.sutanlab.id/surah")
      .then((res) => res.json())
      .then((data) => setChapters(data.data));
  }, []);

  return (
    <ScrollView style={styles.container}>
      {chapters.map((chapter, index) => (
        <Link key={chapter.number} to={`/${chapter.number}`}>
          <Text>
            {index + 1} {chapter.name.transliteration.en}
          </Text>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
