import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Pages/login.js'
import Register from './Pages/register.js'
import Home from './Pages/home.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
            name="Login"
            component={Login}
    />
       <Stack.Screen
            name="Home"
            component={Home}
    />
     <Stack.Screen
            name="Register"
            component={Register}
    />
    </Stack.Navigator>
  </NavigationContainer>
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
