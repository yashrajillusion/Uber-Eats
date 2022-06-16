import { Text, View } from "react-native";
import { Divider } from "react-native-elements";
import About from "../Components/RestaurantDetails/About";
import MenuItem from "../Components/RestaurantDetails/MenuItem";
import ViewCart from "../Components/RestaurantDetails/ViewCar";

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.5} style={{ marginVertical: 20 }} />
      <MenuItem restaurantName={route.params.name} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
