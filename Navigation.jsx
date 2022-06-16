import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetails";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./Redux/store";
import OrderCompleted from "./screens/OrderSuccess";

export default function RootNavigation() {
  const Stack = createNativeStackNavigator();

  const screenOptions = {
    headerShown: false,
  };
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Restaurant" component={RestaurantDetail} />
          <Stack.Screen name="OrderSuccess" component={OrderCompleted} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
