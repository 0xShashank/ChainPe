import { StatusBar } from "expo-status-bar";
global.Buffer = global.Buffer || require("buffer").Buffer;
import { StyleSheet, Text, View, Button } from "react-native";
import { Web3AuthLogin } from "./utils/auth/web3auth";
import "./shim.js";
import Dashboard from "./pages/Dashboard/Dashboard";
export default function App() {
  return <Dashboard />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
