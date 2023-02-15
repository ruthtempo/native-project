import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export const CustomCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text>ID: {item.id}</Text>
      <Text>First Name: {item.firstName}</Text>
      <Text> Last Name: {item.lastName}</Text>
      <Text> Active ? {item.active ? "active" : "inactive"}</Text>
      <Text> Region: {item.region}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    margin: 20,
  },
});
