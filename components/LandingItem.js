import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
} from "react-native";

const LandingItem = (item) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ flex: 1 }}>
      <Text>{item.maintext}</Text>
      <Text>{item.subtext}</Text>
    </View>
  );
};

export default LandingItem;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#5b42754d",
  },
});
