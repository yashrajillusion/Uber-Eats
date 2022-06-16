import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icons icon="home" text="Home" />
      <Icons icon="search" text="Browse" />
      <Icons icon="shopping-bag" text="Grocery" />
      <Icons icon="receipt" text="Orders" />
      <Icons icon="user" text="Account" />
    </View>
  );
}

const Icons = ({ icon, text }) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={icon}
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);
