import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default function ExpenseItem({ pressHandler, item }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <Text>
          {item.title} ${item.amount}
        </Text>
        <Text>x</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#E1DCF3",
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
