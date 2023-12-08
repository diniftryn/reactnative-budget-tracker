import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>i chose to spend my money on</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: 60
    // backgroundColor: "coral"
    // backgroundColor: "#E1DCF3"
  },
  title: {
    textAlign: "center",
    // color: "#fff",
    color: "#31441E",
    fontSize: 20,
    fontWeight: "bold"
  }
});
