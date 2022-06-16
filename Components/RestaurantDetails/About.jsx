import { Image, Text, View } from "react-native";
const apiRestaurantInfo = {
  name: "",
  image:
    "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
  name: "Spice Affair",
  reviews: "1500",
  rating: 4.5,
  categories: [
    { title: "Indian" },
    { title: "Comfort Food" },
    {
      title: "Coffee",
    },
    { title: "Ice Cream" },
    { title: "Snacks" },
  ],
};

export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={name} />
      <RestaurantDetail des={description} />
    </View>
  );
}
const RestaurantImage = ({ image }) => (
  <Image source={{ uri: image }} style={{ height: 180, width: "100%" }} />
);

const RestaurantTitle = ({ title }) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {title}
  </Text>
);

const RestaurantDetail = ({ des }) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {des}
  </Text>
);
