import { StatusBar } from 'expo-status-bar';
import { Row } from 'native-base';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
//import PreviousTransac from "./pages/dashboard/previoustransac";


export default function App() {
  return (
    <NativeBaseProvider>
           <View style={styles.container}>
        <View style={styles.first_box}>
          <Image
            style={styles.tinyLogo}
            source={require('./assets/dash_logo.svg')}
            />
          <View style={styles.text}>
            <Text>Hello Lisa</Text>
            <Text>Welcome Back</Text>
          </View>
          <Image
            style={styles.tinyLogo}
            source={require('./assets/bell.svg')}
            />
        </View>
        <Box style={styles.second_box} bg={{
            linearGradient: {
              colors: ['lightBlue.300', 'violet.800'],
              start: [0, 0],
              end: [1, 0]
            }
          }} p="12" rounded="xl" _text={{
            fontSize: 'md',
            fontWeight: 'medium',
            color: 'warmGray.50',
            textAlign: 'center'
          }}>
            <View>
              <Text>Lisa</Text>
              <Text>Drop-down</Text>
            </View>
            <View>
              <Text>Wallet</Text>
              <Text>Hide icon</Text>
            </View>
        </Box>
        <View>
          <Text>Transaction History</Text>
        </View>
        {/* < PreviousTransc /> */}
      <Box>Hello world</Box>
      </View>
    </NativeBaseProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  first_box: {
    flexDirection: 'row',
  },
  second_box: {
    
  },
  text: {

  }
});
