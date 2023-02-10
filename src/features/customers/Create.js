import React from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-web";

const Item = ({ title, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    style={[styles.item, { backgroundColor }]}
    onPress={onPress}
  >
    <Text style={[styles.itemText, { color: textColor }]}>{title}</Text>
  </TouchableOpacity>
);

const regions = [
  "South West",
  "North, West",
  "South East",
  "North East",
  "Mid West",
];

const activity = ["Active", "Inactive"];
export const Create = () => {
  const [firstName, onChangeFirstName] = React.useState("");
  const [lastName, onChangeLastName] = React.useState("");

  return (
    <View>
      <View>
        <Text style={styles.title}>Create new customer</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeFirstName}
          placeholder="First Name"
          value={firstName}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeLastName}
          value={lastName}
          placeholder="Last Name"
        />
      </View>
      <View>
        <Text style={styles.title}>Active?</Text>
        <FlatList
          data={activity}
          renderItem={({ item }) => <Item title={item} />}
          keyExtractor={(item) => item}
        />
      </View>
      <View>
        <Text style={styles.title}>Region:</Text>
        <FlatList
          data={regions}
          renderItem={({ item }) => <Item title={item} />}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  itemText: {
    fontSize: 16,
    textAlign: "center",
  },
});
