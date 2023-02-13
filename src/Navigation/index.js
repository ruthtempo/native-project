import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "./screens/Welcome";
import { Regions } from "./screens/Regions";
import { Customers } from "./screens/Customers";
import { EditScreen } from "./screens/Edit";
import { stylesFn } from "../components/StyleSheet";
import { CreateScreen } from "./screens/Create";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../features/customers/reducers";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchCustomers());
  }, []);

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
          component={EditScreen}
          options={{ headerTitleAlign: "center" }}
        ></Stack.Screen>
        <Stack.Screen
          name="CreateCustomer"
          component={CreateScreen}
          options={{ headerTitleAlign: "center" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
