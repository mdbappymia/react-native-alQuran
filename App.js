import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeRouter, Link, Route } from "react-router-native";
import Details from "./Pages/Details";

import Home from "./Pages/Home";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Link to="/">
          <Text>Home</Text>
        </Link>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={Details} />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
});
