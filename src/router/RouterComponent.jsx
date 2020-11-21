import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../User/login';
import Register from '../User/register';
import Profil from '../User/profil';
import Home from '../Media/home';
import Favoris from '../Media/favoris';

const Tab = createBottomTabNavigator();

function RouterComponent() {
  const logged = useSelector((state) => state.userReducer.user.logged);
  const LoginNavigation = (() => (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Register" component={Register} />
      </Tab.Navigator>
    </NavigationContainer>
  ));

  const AppNavigation = (() => (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favoris" component={Favoris} />
        <Tab.Screen name="Profil" component={Profil} />
      </Tab.Navigator>
    </NavigationContainer>
  ));

  const routerTabs = (() => {
    if (logged === false) {
      return LoginNavigation();
    }
    return AppNavigation();
  });

  return (
    <>
      {routerTabs()}
    </>
  );
}

export default RouterComponent;
