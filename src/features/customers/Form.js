import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { CustomButton } from "../../components/Button";
import { useUpdateFields } from "./hooks";

const Item = ({ title, onPress, backgroundColor, textColor, value }) => {
  return (
    <TouchableOpacity
      style={[styles.item, { backgroundColor }]}
      onPress={onPress}
      backgroundColor={backgroundColor}
      value={value}
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

const activityOptions = ["active", "inactive"];

export const Form = ({ handleSubmit, status }) => {
  const { navigate } = useNavigation();
  const { fields, setFormField } = useUpdateFields();

  const { firstName, lastName } = fields;

  const [selectedActivity, setSelectedActivity] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const handlePressActivity = (item) => {
    setSelectedActivity(item);
    setFormField("activity")(item);
  };

  const handlePressRegion = (item) => {
    setSelectedRegion(item);
    setFormField("region")(item);
  };

  const onSubmit = () => {
    if (Object.values(fields).every((field) => field)) {
      //only if all fields have a value
      console.log(fields);
      handleSubmit();
      navigate("ListRegions");
    } else {
      console.log(status, "please fill all mandatory fields");
    }
  };

  return (
    <View>
      <View>
        <Text style={styles.title}>Create new customer</Text>
        <TextInput
          style={styles.input}
          onChangeText={setFormField("firstName")}
          placeholder="First Name"
          value={firstName}
          key="firstName"
        />
        <TextInput
          style={styles.input}
          value={lastName}
          placeholder="Last Name"
          onChangeText={setFormField("lastName")}
          key="lastName"
        />
      </View>
      <View>
        <Text style={styles.title}>Active?</Text>
        <FlatList
          data={activityOptions}
          renderItem={({ item }) => (
            <Item
              title={item}
              value={item}
              onPress={() => handlePressActivity(item)}
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
              onPress={() => handlePressRegion(item)}
              backgroundColor={item === selectedRegion ? "#6e3b6e" : "#f9c2ff"}
              textColor={item === selectedRegion ? "white" : "black"}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
      <CustomButton
        text={"Save New Customer"}
        onPress={onSubmit}
        disabled={status !== "PENDING" && status !== "INPROGRESS"}
      />
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
    borderRadius: 10,
  },
  itemText: {
    fontSize: 16,
    textAlign: "center",
  },
});