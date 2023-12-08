import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddExpense({ submitHandler }) {
  [expense, setExpense] = useState({ title: "", amount: 0 });

  const changeHandler = (inputIdentifier, val) => {
    setExpense({ ...expense, [inputIdentifier]: val.charAt(0).toLowerCase() + val.slice(1) });
  };

  const pressHandler = () => {
    submitHandler(expense);
    setExpense({ title: "", amount: 0 });
  };

  return (
    <View>
      <TextInput style={styles.input} placeholder="what" onChangeText={val => changeHandler("title", val)} value={expense.title} />
      <TextInput style={styles.input} placeholder="how much" onChangeText={val => changeHandler("amount", val)} value={expense.amount} type="number" />
      <Button color="#31441E" onPress={pressHandler} title="add expense" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    autoCapitalize: "none",
    keyboardType: "visible-password"
  }
  // inputNumeric: {
  //   keyboardType: "number-pad"
  // }
});
