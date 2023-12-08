import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button, TextInput, Image } from "react-native";

export default function Footer() {
  const [quote, setQuote] = useState(`"money comes to me easily & effortlessly"`);
  const [modalVisible, setModalVisible] = useState(false);

  const handleTextClick = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.footer}>
      {/* <Image
        source={require("../assets/cactus-dancing.gif")} // Replace './example.gif' with the path to your GIF
        style={{ width: 200, height: 200, justifyContent: "center" }} // Set the desired width and height
      /> */}
      <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <TextInput style={styles.edit} value={quote} onChangeText={newQuote => setQuote(newQuote)} />
            <Button style={styles.button} title="✨ manifest ✨" onPress={closeModal} />
          </View>
        </View>
      </Modal>

      <TouchableOpacity onPress={handleTextClick}>
        <Text style={styles.quote}>{quote}</Text>
      </TouchableOpacity>
      <Text style={styles.copyright}>© whiztech / DF</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#E1DCF3",
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  quote: {
    fontSize: 15,
    fontWeight: "bold",
    fontStyle: "italic",
    // color: "#E1DCF3",
    // color: "#fff",
    color: "#31441E",
    paddingBottom: 15
  },
  copyright: {
    textAlign: "center",
    // color: "#fff",
    color: "#31441E",
    fontSize: 15,
    paddingBottom: 15
    // fontWeight: "bold"
  },
  edit: {
    backgroundColor: "#E1DCF3",
    fontSize: 15,
    padding: 5
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center"
  }
});
