import { Text, View } from "react-native";
import { CustomButton as Button } from "../components/Button";
import { stylesFn } from "../components/StyleSheet";

export const Welcome = ({ navigation }) => {
  const styles = stylesFn();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Customer Manager Plus</Text>
      <Button
        text={"Click to continue"}
        onPress={() => navigation.navigate("ListRegions")}
      />
      <Button text={"Clear Storage"} />
    </View>
  );
};
