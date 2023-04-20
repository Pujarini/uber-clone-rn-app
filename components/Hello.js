import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Hello = () => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};

export default Hello;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
  },
});
