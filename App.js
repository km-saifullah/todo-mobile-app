import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Item from "./components/Item";
import ItemInput from "./components/ItemInput";

const App = () => {
  const [todo, setTodo] = useState([]);

  // handle add list
  const handleAddList = (enteredText) => {
    // setTodo([...todo, listItem]); // this is not the best way to store the data in the state variable, if the the present data is depend on next data
    setTodo((currrentList) => [
      ...todo,
      { text: enteredText, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <ItemInput onAddList={handleAddList} />
      <View style={styles.listContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={todo}
          renderItem={(itemData) => {
            return <Item text={itemData.item.text} />;
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
  listContainer: {
    flex: 4,
  },
});
