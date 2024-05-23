import { Pressable, StyleSheet, Text, View } from "react-native";

const Item = (props) => {
  return (
    <View style={styles.listItem}>
      <Pressable
        android_ripple={{ color: "#222" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.itemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#B33771",
    margin: 8,
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
  itemText: {
    color: "#f5f6fa",
    fontSize: 16,
    fontWeight: "500",
    textTransform: "capitalize",
    padding: 8,
  },
});
