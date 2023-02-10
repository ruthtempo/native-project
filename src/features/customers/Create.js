import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { CustomButton } from "../../components/Button";

const Item = ({ title, onPress, backgroundColor, textColor }) => {
  return (
    <TouchableOpacity
      style={[styles.item, { backgroundColor }]}
      onPress={onPress}
      backgroundColor={backgroundColor}
    >
      <Text style={[styles.itemText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const regions = [
  "South West",
  "North West",
  "South East",
  "North East",
  "Mid West",
];

const activity = ["active", "inactive"];
export const Create = () => {
  const [firstName, onChangeFirstName] = React.useState("");
  const [lastName, onChangeLastName] = React.useState("");
  const [selectedActivity, setSelectedActivity] = React.useState("");
  const [region, setRegion] = React.useState("");

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
          renderItem={({ item }) => (
            <Item
              title={item}
              onPress={() => setSelectedActivity(item)}
              backgroundColor={
                item === selectedActivity ? "#6e3b6e" : "#f9c2ff"
              }
              textColor={item === selectedActivity ? "white" : "black"}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
      <View>
        <Text style={styles.title}>Region:</Text>
        <FlatList
          data={regions}
          renderItem={({ item }) => (
            <Item
              title={item}
              onPress={() => setRegion(item)}
              backgroundColor={item === region ? "#6e3b6e" : "#f9c2ff"}
              textColor={item === region ? "white" : "black"}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
      <CustomButton text={"Save New Customer"} />
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
