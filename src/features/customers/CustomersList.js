import { FlatList, Text, View } from "react-native";
import { CustomCard } from "../../components/CustomCard";
import { useListCustomers } from "./hooks";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export const CustomersList = () => {
  const customers = useListCustomers();
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const region = params.region;

  const filteredCustomers = customers?.filter(
    (customer) => customer.region === region
  );

  return (
    <View>
      <Text style={{ textAlign: "center", paddingVertical: 10, fontSize: 20 }}>
        Viewing Customers in the {region} region
      </Text>
      {filteredCustomers?.length ? (
        <FlatList
          data={filteredCustomers}
          renderItem={({ item }) => (
            <CustomCard
              item={item}
              keyExtractor={(index) => index.toString()}
              onPress={() => navigate("EditCustomer", { customerID: item.id })}
            />
          )}
        />
      ) : (
        <Text
          style={{ textAlign: "center", paddingVertical: 10, fontSize: 15 }}
        >
          No customers for this region yet
        </Text>
      )}
    </View>
  );
};
