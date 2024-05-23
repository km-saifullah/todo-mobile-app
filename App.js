import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";

const App = () => {
  const [listItem, setListItem] = useState("");
  const [todo, setTodo] = useState([]);

  // handle input field
  const handleInputField = (enteredText) => {
    setListItem(enteredText);
  };

  // handle add list
  const handleAddList = () => {
    // setTodo([...todo, listItem]); // this is not the best way to store the data in the state variable, if the the present data is depend on next data
    setTodo((currrentList) => [
      ...todo,
      { text: listItem, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add your list"
          style={styles.textInput}
          onChangeText={handleInputField}
        />
        <Button title="Add Item" onPress={handleAddList} color="#c71585" />
      </View>
      <View style={styles.listContainer}>
        {/* scrollview */}
        {/* <ScrollView showsVerticalScrollIndicator={false}>
          {todo.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          ))}
        </ScrollView> */}

        {/* flatlist */}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={todo}
          renderItem={(itemData) => {
            return (
              <View style={styles.listItem}>
                <Text style={styles.itemText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
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
  listItem: {
    backgroundColor: "#B33771",
    margin: 8,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  itemText: {
    color: "#f5f6fa",
    fontSize: 16,
    fontWeight: "500",
  },
});
