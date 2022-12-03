import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { login, logout } from 'utils/auth/web3auth';
import React from 'react';
import Dashboard from './pages/Dashboard/Dashboard';

export default function App() {
  
  return (
    <Dashboard />
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
