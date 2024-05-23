import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

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
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add your list"
        style={styles.textInput}
        onChangeText={handleInputField}
        value={listItem}
      />
      <Button title="Add Item" onPress={addItemHandler} color="#c71585" />
    </View>
  );
};

export default ItemInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 2,
    borderColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderStyle: "solid",
    width: "75%",
    marginRight: 8,
    padding: 8,
  },
});
