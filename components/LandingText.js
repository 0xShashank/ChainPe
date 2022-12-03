import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
//import { useFonts } from "expo-font";
//import LandingItem from "./LandingItem";

const slides = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const LandingText = (props) => {
  // const [loaded] = useFonts({
  //   Montserrat: require("../assets/fonts/landingfont.ttf"),
  // });
  // if (!loaded) {
  //   return null;
  // }
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {/* <Text style={styles.maintext}>SMART STUFF</Text>
      <Text style={styles.subtext}>
        This is Landing Page.Lorem bla bla and lemme tell you some dtuff
        thingies
      </Text> */}
      <Text>Onboarding</Text>
    </View>
  );
};

export default LandingText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#5b42754d",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  // text: {
  //   //paddingBottom: 40,
  //   margin: 40,
  // },
  // maintext: {
  //   alignItems: "center",
  //   margin: 10,
  //   //fontFamily: "landingfont",
  //   fontSize: 20,
  // },
  // subtext: {
  //   margin: 10,
  // },
});
