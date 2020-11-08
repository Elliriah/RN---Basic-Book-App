import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Pages/login.js'
import Register from './Pages/register.js'
import Profil from './Pages/profil.js'
import Home from './Pages/home.js'
import Navbar from './Layout/navbar.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <>
        <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login}/>
        <Tab.Screen name="Register" component={Register} />
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Profil" component={Profil} />
      </Tab.Navigator>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator> */}
    </NavigationContainer>
    {/* <NavigationContainer>
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
  </NavigationContainer> */}
  {/* <Navbar/> */}
  </>
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
