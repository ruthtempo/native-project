import { Text, StyleSheet, Pressable, View } from "react-native";

export const CustomButton = ({ text, onPress, disabled }) => {
  const styles = stylesFn({ disabled: disabled });
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onPress} style={styles.button} disabled={disabled}>
        <Text style={styles.buttonLabel}>{text}</Text>
      </Pressable>
    </View>
  );
};

export const stylesFn = ({ disabled = false }) => {
  let backgroundColor;
  let color;

  if (disabled) {
    backgroundColor = "lightgray";
    color = "grey";
  } else {
    backgroundColor = "purple";
    color = "white";
  }

  return StyleSheet.create({
    buttonContainer: {
      width: 320,
      height: 68,
      marginHorizontal: 20,
      alignItems: "center",
      justifyContent: "center",
      padding: 3,
      alignSelf: "center",
    },
    button: {
      borderRadius: 30,
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      backgroundColor: backgroundColor,
    },
    buttonLabel: {
      color: color,
      fontSize: 20,
    },
  });
};
