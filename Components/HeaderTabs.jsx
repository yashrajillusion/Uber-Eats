import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HeaderTabs() {
  const [activeTab, setActive] = useState("Delivery");
  return (
    <View style={styles.view}>
      <HeaderButton
        text="Delivery"
        activeTab={activeTab}
        setActive={setActive}
      />
      <HeaderButton text="Pickup" activeTab={activeTab} setActive={setActive} />
    </View>
  );
}

const HeaderButton = ({ text, activeTab, setActive }) => {
  return (
    <TouchableOpacity
      onPress={() => setActive(text)}
      style={{
        ...styles.container,
        backgroundColor: activeTab === text ? "black" : "white",
      }}
    >
      <Text
        style={{
          ...styles.text,
          color: activeTab === text ? "white" : "black",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  text: {
    color: "white",
    fontSize: 15,
    fontWeight: "900",
  },
  view: {
    flexDirection: "row",
    alignSelf: "center",
  },
});
