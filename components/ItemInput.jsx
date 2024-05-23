import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const ItemInput = (props) => {
  const [listItem, setListItem] = useState("");

  // handle input field
  const handleInputField = (enteredText) => {
    setListItem(enteredText);
  };

  //   add item handler
  const addItemHandler = () => {
    props.onAddList(listItem);
    setListItem("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add your list"
          style={styles.textInput}
          onChangeText={handleInputField}
          value={listItem}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Item" onPress={addItemHandler} color="green" />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="#c71585"
              onPress={props.onCloseModal}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ItemInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 2,
    borderColor: "#cccccc",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderStyle: "solid",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
