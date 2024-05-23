import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const App = () => {
  const [listItem, setListItem] = useState("");

  // handle input field
  const handleInputField = (enteredText) => {
    setListItem(enteredText);
  };

  // handle add list
  const handleAddList = () => {
    console.log(listItem);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your List item"
          style={styles.textInput}
          onChangeText={handleInputField}
        />
        <Button title="Add Item" onPress={handleAddList} />
      </View>
      <View style={styles.listContainer}>
        <Text>My List...</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  listContainer: {
    flex: 4,
  },
});
