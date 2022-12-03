import { StatusBar } from "expo-status-bar";
global.Buffer = global.Buffer || require("buffer").Buffer;
<<<<<<< HEAD
import { StyleSheet, Text, View, Button } from "react-native";
import { Web3AuthLogin } from "./utils/auth/web3auth";
import "./shim.js";
import Dashboard from "./pages/Dashboard/Dashboard";
export default function App() {
  return <Dashboard />;
=======
import { StyleSheet, Text, View, Button, AsyncStorage } from "react-native";
import { Web3AuthLogin } from "./utils/auth/web3auth";
import "./shim.js";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    AsyncStorage.getItem("CHAIN_ID").then((chainId) => {
      if (!chainId) {
        AsyncStorage.setItem("CHAIN_ID", "ETH");
      }
    });
  }, []);
  // const loggedInView = (
  //   <View style={styles.buttonArea}>
  //     <Button title="Get User Info" onPress={() => uiConsole(userInfo)} />
  //     <Button title="Get Chain ID" onPress={() => getChainId()} />
  //     <Button title="Get Accounts" onPress={() => getAccounts()} />
  //     <Button title="Get Balance" onPress={() => getBalance()} />
  //     <Button title="Send Transaction" onPress={() => sendTransaction()} />
  //     <Button title="Sign Message" onPress={() => signMessage()} />
  //     <Button title="Get Private Key" onPress={() => uiConsole(key)} />
  //     <Button title="Log Out" onPress={() => setKey('')} />
  //   </View>
  // );

  // const unloggedInView = (
  //   <View style={styles.buttonArea}>
  //     <Button title="Login with Web3Auth" onPress={login} />
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <Button title="Login with Web3Auth" onPress={Web3AuthLogin} />
    </View>
  );
>>>>>>> eeb6aae (add web3auth)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
