import { StatusBar } from "expo-status-bar";
global.Buffer = global.Buffer || require("buffer").Buffer;
import { StyleSheet, Text, View, Button, AsyncStorage } from "react-native";
import { Web3AuthLogin } from "./utils/auth/web3auth";
import { Web3AuthModal } from "./utils/auth/web3Provider";
import "./shim.js";
import { getBalance, sendPayment } from "./utils/auth/ethersRPC";
import { useEffect } from "react";


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthPage from "./screens/AuthPage/registerPage";
import CreatePersonalAcc from "./screens/CreatePersonalAcc/createPersonalAccount";
import Landing from "./screens/Landing/landing";
import LoadingScreen from "./screens/LoadingScreen/loadingScreen";
import LoginPage from "./screens/LoginPage/loginPage";
import Payment1 from "./screens/Payment/paymentFirst";
import Payment2 from "./screens/Payment/paymentSecond";
import SuccessScreen from "./screens/SuccessScreen/successScreen";
import Scanner from "./screens/Scanner";

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    AsyncStorage.getItem("CHAIN_ID").then((chainId) => {
      console.log(chainId);
      AsyncStorage.setItem("CHAIN_ID", "BSC_TEST").then(() =>
        changeChain("BSC_TEST")
      );
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AuthPage" component={AuthPage} options={{ headerShown: false }} />
        <Stack.Screen name="CreatePersonalAcc" component={CreatePersonalAcc} options={{ headerShown: false }} />
        <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="Payment1" component={Payment1} options={{ headerShown: false }} />
        <Stack.Screen name="Payment2" component={Payment2} options={{ headerShown: false }} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Scanner" component={Scanner} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
