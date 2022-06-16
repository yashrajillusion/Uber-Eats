import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";

import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import { styles } from "../Components/RestaurantDetails/MenuItem";
import { Divider } from "react-native-elements";

export default function OrderCompleted() {
  const { items, restaurantName } = useSelector(
    (store) => store.cart.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        marginTop: StatusBar.currentHeight,
        alignItems: "center",
      }}
    >
      <LottieView
        style={{
          height: 100,
          alignSelf: "center",
          marginBottom: 30,
        }}
        source={require("../assets/animations/check-mark.json")}
        autoPlay
        speed={0.5}
        loop={false}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Your order at {restaurantName} has been placed for $ {totalUSD}
      </Text>
      <PreparingProd />
      <LottieView
        style={{
          height: 200,
          alignSelf: "center",
        }}
        source={require("../assets/animations/cooking.json")}
        autoPlay
        speed={0.5}
      />
    </SafeAreaView>
  );
}

const PreparingProd = () => {
  const cartItems = useSelector((store) => store.cart.selectedItems.items);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {cartItems.map((res, i) => (
        <View key={i}>
          <View style={styles.MenuItemStyle}>
            <View style={{ width: 240, justifyContent: "space-evenly" }}>
              <Text style={styles.titleStyle}>{res.title}</Text>
              <Text>{res.description}</Text>
              <Text>{res.price}</Text>
            </View>
            <Image
              style={{ width: 100, height: 100, borderRadius: 8 }}
              source={{ uri: res.image }}
            ></Image>
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
};
