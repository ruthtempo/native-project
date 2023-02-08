import { Text, View, FlatList, StyleSheet } from "react-native";
import { stylesFn } from "../components/StyleSheet";

import { CustomCard } from "../components/Card";

export const Customers = ({ region, navigation }) => {
  const genStyles = stylesFn();
  const customers = [
    {
      id: 1,
      firstName: "Paco",
      lastName: "Vila",
      active: true,
      region: "South West",
    },
    {
      id: 2,
      firstName: "Paco",
      lastName: "Vila",
      active: true,
      region: "South West",
    },
  ]; // this is just mock data, that later i will put into the store ans access dynamically
  return (
    <View>
      <Text style={{ textAlign: "center", paddingVertical: 10 }}>
        Viewing Customers in the {region} region
      </Text>
      <FlatList
        data={customers}
        renderItem={({ item }) => (
          <CustomCard
            item={item}
            keyExtractor={(index) => index.toString()}
            onPress={() => navigation.navigate("EditCustomer")}
          />
        )}
      />
    </View>
  );
};
