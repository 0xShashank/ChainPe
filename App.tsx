import { StatusBar } from "expo-status-bar";
global.Buffer = global.Buffer || require("buffer").Buffer;
import { StyleSheet, Text, View, Button, AsyncStorage } from "react-native";
import { Web3AuthLogin } from "./utils/auth/web3auth";
import "./shim.js";
import { changeChain } from "./redux/chainSlice";
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
export default function App() {
  useEffect(() => {
    AsyncStorage.getItem("CHAIN_ID").then((chainId) => {
      console.log(chainId);
      changeChain("ETH");
    });
  }, []);
  return (
    <Dashboard />
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
