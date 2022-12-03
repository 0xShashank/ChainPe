import { StatusBar } from "expo-status-bar";
global.Buffer = global.Buffer || require("buffer").Buffer;
import { StyleSheet, Text, View, Button, AsyncStorage } from "react-native";
import { Web3AuthLogin } from "./utils/auth/web3auth";
import { Web3AuthModal } from "./utils/auth/web3Provider";
import "./shim.js";
import { getBalance, sendPayment } from "./utils/auth/ethersRPC";
import { changeChain } from "./redux/chainSlice";
import { useEffect } from "react";
import { changeAndUpdateChain } from "./utils/changeChain";
import { Provider } from "react-redux";
import React from "react";

import useChain from "./components/hooks/useChain";
import Dashboard from "./pages/landing/landing";
export default function App() {
  useEffect(() => {
    AsyncStorage.getItem("CHAIN_ID").then((chainId) => {
      console.log("chainId", chainId);
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
