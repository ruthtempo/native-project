import { Text, View } from "react-native";
import { CustomButton as Button } from "../../components/Button";
import { stylesFn } from "../../components/StyleSheet";
import { useDispatch } from "react-redux";
import * as actions from "../../features/customers/reducers";

export const Welcome = ({ navigation }) => {
  const styles = stylesFn();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Customer Manager Plus</Text>
      <Button
        text={"Click to continue"}
        onPress={() => navigation.navigate("ListRegions")}
      />
      <Button
        text="Notifications"
        onPress={() => navigation.navigate("ContactCustomer")}
      />
      <Button
        text={"Clear Storage"}
        onPress={() => dispatch(actions.clearStorage())}
      />
    </View>
  );
};
