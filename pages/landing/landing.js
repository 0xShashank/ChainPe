import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import ButtonCustom from "../../components/Button";
import LandingText from "../../components/LandingText";

const { width, height } = Dimensions.get("window");

const Dashboard = () => {
  return (
    //main div - 2 flex
    <View style={styles.container}>
      <View>
        <Image
          style={styles.landingimage}
          source={require("../../assets/landing.png")}
        />
      </View>

      <View style={styles.container_sub1}>
        {/* <LandingText /> */}
        <View>
          <ButtonCustom title="Continue" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container_sub1: {
    flex: 1,
    gap: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  landingimage: {
    width: width,
    height: height * 0.69,
  },
});

export default Dashboard;
