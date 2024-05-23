import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import Item from "./components/Item";
import ItemInput from "./components/ItemInput";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  // modal show
  const handleAddItems = () => {
    setOpenModal(true);
  };

  // modal close
  const handleModalClose = () => {
    setOpenModal(false);
  };

  // handle add list
  const handleAddList = (enteredText) => {
    // setTodo([...todo, listItem]); // this is not the best way to store the data in the state variable, if the the present data is depend on next data
    if (enteredText == "") {
      console.warn("Plese Add a Item...");
    } else {
      setTodo((currrentList) => [
        ...todo,
        { text: enteredText, id: Math.random().toString() },
      ]);
      handleModalClose();
    }
  };

  // handle delete item
  const handleDeleteItem = (id) => {
    setTodo((currrentList) => {
      return currrentList.filter((item) => item.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Add Todo List" color="#c71585" onPress={handleAddItems} />
      {openModal && (
        <ItemInput
          onAddList={handleAddList}
          visible={openModal}
          onCloseModal={handleModalClose}
        />
      )}
      <View style={styles.listContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={todo}
          renderItem={(itemData) => {
            return (
              <Item
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={handleDeleteItem}
              />
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
  listContainer: {
    flex: 4,
  },
});
