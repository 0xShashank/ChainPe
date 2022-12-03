import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useFonts } from "expo-font";

const LandingText1 = (props) => {
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/landingfont.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.text}>
      <Text style={styles.maintext}>SMART STUFF</Text>
      <Text style={styles.subtext}>
        This is Landing Page.Lorem bla bla and lemme tell you some dtuff
        thingies
      </Text>
    </View>
  );
};

export default LandingText1;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#5b42754d",
  },
  text: {
    //paddingBottom: 40,
    margin: 40,
  },
  maintext: {
    alignItems: "center",
    margin: 10,
    //fontFamily: "landingfont",
    fontSize: 20,
  },
  subtext: {
    margin: 10,
  },
});
