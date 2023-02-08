import { StyleSheet, Text, View } from "react-native";
import { CustomButton as Button } from "../components/Button";

export const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Customer Manager Plus</Text>
      <Button text={"Click to continue"} />
      <Button text={"Clear Storage"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
