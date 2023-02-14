import { FlatList, Text, View } from "react-native";
import { CustomCard } from "../../components/Card";
import { useListCustomers } from "./hooks";
import { useRoute } from "@react-navigation/native";

export const CustomersList = ({ navigation }) => {
  const customers = useListCustomers();
  const { params } = useRoute();
  const region = params.region;

  const filteredCustomers = customers?.filter(
    (customer) => customer.region === region
  );

  return (
    <View>
      <Text style={{ textAlign: "center", paddingVertical: 10, fontSize: 30 }}>
        Viewing Customers in the {region} region
      </Text>
      {filteredCustomers?.length ? (
        <FlatList
          data={filteredCustomers}
          renderItem={({ item }) => (
            <CustomCard
              item={item}
              keyExtractor={(index) => index.toString()}
              onPress={() => navigation.navigate("EditCustomer")}
            />
          )}
        />
      ) : (
        <Text
          style={{ textAlign: "center", paddingVertical: 10, fontSize: 25 }}
        >
          No customers for this region yet
        </Text>
      )}
    </View>
  );
};
