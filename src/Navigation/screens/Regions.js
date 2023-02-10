import { useEffect, useRef } from "react";
import { Text, View, Animated } from "react-native";
import { CustomButton as Button } from "../../components/Button";
import { stylesFn } from "../../components/StyleSheet";

const FadeInView = (props) => {
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fade]);
  return (
    <Animated.View style={{ ...props.style, opacity: fade }}>
      {props.children}
    </Animated.View>
  );
};

export const Regions = ({ navigation }) => {
  const genStyles = stylesFn();
  const regions = [
    "South West",
    "North, West",
    "South East",
    "North East",
    "Mid West",
  ];
  return (
    <View style={genStyles.container}>
      <FadeInView>
        <Button
          text={"Create customer"}
          onPress={() => navigation.navigate("CreateCustomer")}
        />
        <Text style={genStyles.text}>List of Regions</Text>
        <Text>Select a Region</Text>
        {regions.map((region) => (
          <Button
            text={region}
            key={region}
            onPress={() => navigation.navigate("ListCustomers")}
          />
        ))}
      </FadeInView>
    </View>
  );
};
