import { StyleSheet, Text, View } from "react-native";

const Item = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>{props.text}</Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
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
    textTransform: "capitalize",
  },
});
