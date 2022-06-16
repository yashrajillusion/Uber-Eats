import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import SearchBar from "../Components/Search";
import HeaderTabs from "../Components/HeaderTabs";
import Categories from "../Components/Categroties";
import RestaurantItem, { localRestaurants } from "../Components/Restaurant";
import { useState } from "react";
import { Divider } from "react-native-elements";
import BottomTabs from "../Components/BottomTabs";

const YELP_API_KEY = "Your api key ";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);

  const getRestaurntsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#eee",
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
