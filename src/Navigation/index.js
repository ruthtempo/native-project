import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { stylesFn } from "../components/StyleSheet";

import { Welcome } from "./screens/Welcome";
import { Regions } from "./screens/Regions";
import { Customers } from "./screens/Customers";
import { EditScreen } from "./screens/Edit";
import { CreateScreen } from "./screens/Create";
import { ContactCustomerScreen } from "./screens/ContactCustomerScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const styles = stylesFn();
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerTitleAlign: "center" }}
        ></Stack.Screen>
        <Stack.Screen
          name="ListRegions"
          component={Regions}
          options={{ headerTitleAlign: "center" }}
        ></Stack.Screen>
        <Stack.Screen
          name="ListCustomers"
          component={Customers}
          options={{ headerTitleAlign: "center" }}
        ></Stack.Screen>
        <Stack.Screen
          name="EditCustomer"
          component={EditScreen}
          options={{ headerTitleAlign: "center" }}
        ></Stack.Screen>
        <Stack.Screen
          name="CreateCustomer"
          component={CreateScreen}
          options={{ headerTitleAlign: "center" }}
        ></Stack.Screen>
        <Stack.Screen
          name="ContactCustomer"
          component={ContactCustomerScreen}
          options={{ headerTitleAlign: "center" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
