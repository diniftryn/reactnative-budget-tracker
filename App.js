import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import Header from "./components/header";
import Footer from "./components/footer";
import ExpenseItem from "./components/expenseItem";
import AddExpense from "./components/addExpense";

export default function App() {
  const [expenses, setExpenses] = useState([
    { key: 1, title: "transport 🚌", amount: 40 },
    { key: 2, title: "coffee capsules ☕", amount: 25 },
    { key: 3, title: "new dress 👗", amount: 20 }
  ]);

  const pressHandler = key => {
    setExpenses(prevExpenses => {
      return prevExpenses.filter(expense => expense.key != key);
    });
  };

  const submitHandler = ({ title, amount }) => {
    if (title.length && amount) {
      setExpenses(prevExpenses => {
        return [{ title, amount, key: Math.random().toString() }, ...prevExpenses];
      });
    } else {
      Alert.alert("OOPS", "fields cannot be empty", [{ text: "Understood", onPress: () => console.log("alert closed") }]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismissed");
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddExpense submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList data={expenses} renderItem={({ item }) => <ExpenseItem item={item} pressHandler={pressHandler} />} />
          </View>
        </View>
        <Footer />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff"
    backgroundColor: "#FCFEFC"
    // backgroundColor: "#E1DCF3"
  },
  content: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 15,
    padding: 40
  },
  list: {
    flex: 1,
    marginTop: 3
  }
});
