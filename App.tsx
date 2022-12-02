import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { login, logout } from 'utils/auth/web3auth';

export default function App() {

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
      <View style={styles.buttonArea}>
        <Button title="Login with Web3Auth" onPress={login} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
