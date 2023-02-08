import { StyleSheet } from "react-native";

export const stylesFn = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
    text: {
      fontSize: 20,
      textAlign: "center",
      padding: 10,
    },
  });
};
