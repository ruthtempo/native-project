import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "./src/screens/Welcome";
import { Regions } from "./src/screens/Regions";
import { Customers } from "./src/screens/Customers";
import { Edit } from "./src/screens/Edit";

import { stylesFn } from "./src/components/StyleSheet";

const Stack = createNativeStackNavigator();

export default function App() {
  const styles = stylesFn();
  return (
    <NavigationContainer style={styles.container} initialRouteName="Welcome">
      <Stack.Navigator>
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
          component={Edit}
          options={{ headerTitleAlign: "center" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
