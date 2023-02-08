import { Text, StyleSheet, Pressable, View } from "react-native";

export const CustomButton = ({ text, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonLabel}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "purple",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 20,
  },
});
