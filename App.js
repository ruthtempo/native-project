import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "./src/screens/Welcome";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerTitleAlign: "center" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
