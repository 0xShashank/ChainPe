import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './pages/Dashboard/Dashboard';
import Landing from './pages/landing/landing';
import AuthPage from './pages/authpage/RegisterPage'
import CreatePersonalAcc from './pages/CreatePersonalAcc/CreatePersonalAcc'
import LandingText from './components/LandingText'
import Form from './pages/form/form'

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <Dashboard />
    //<Landing />
     //<LandingText />
     //<AuthPage />
     <Form />
    //<CreatePersonalAcc />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
