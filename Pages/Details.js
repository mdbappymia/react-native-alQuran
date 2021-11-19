import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Details({ match }) {
  const [sura, setSura] = useState([]);
  useEffect(() => {
    fetch(`https://api.quran.sutanlab.id/surah/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => setSura(data.data.verses));
  }, []);

  return (
    <ScrollView style={styles.container}>
      {sura.map((ayah, index) => (
        <Text key={index}>
          {"\n"}
          {ayah.text.arab}
          {`(${ayah.number.inSurah})`}
          {"\n"}
          {ayah.text.transliteration.en}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
