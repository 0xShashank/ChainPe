import { StatusBar } from "expo-status-bar";
global.Buffer = global.Buffer || require("buffer").Buffer;
import { StyleSheet, Text, View, Button, AsyncStorage } from "react-native";
import { Web3AuthLogin } from "./utils/auth/web3auth";
import { Web3AuthModal } from "./utils/auth/web3Provider";
import "./shim.js";
import { getBalance, sendPayment } from "./utils/auth/ethersRPC";
import { changeChain } from "./redux/chainSlice";
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
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
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
