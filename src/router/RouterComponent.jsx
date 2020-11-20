import React, { useEffect, useState } from 'react';
import {
  ImageBackground, View, StyleSheet, Button, TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import withReducer from '../store/withReducer';
import Login from '../User/login';
import Register from '../User/register';
import Profil from '../User/profil';
import Home from '../Media/home';
import {  useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
function RouterComponent(props) {

  const logged = useSelector((state) => state.userReducer.user.logged);
  const LoginNavigation = (() => {
    return (
    <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name="Login" component={Login} />
    <Tab.Screen name="Register" component={Register} />
    </Tab.Navigator>
    </NavigationContainer>
    )
  });

  const AppNavigation = (() => {
    return (
      <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profil" component={Profil} />
      </Tab.Navigator>
      </NavigationContainer>
    )
  });

  const routerTabs = (() => {
    if (logged === false) {
       return LoginNavigation();
    } else {
       return AppNavigation();
    }
  })

  return (
    <>
      {routerTabs()}
    </>
  );
}

export default RouterComponent;
