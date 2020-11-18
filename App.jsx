import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Login from './src/User/login';
import Register from './src/User/register';
import Profil from './src/User/profil';
import Home from './src/Media/home';
import { store, persistor } from './src/store/configStore';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Register" component={Register} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profil" component={Profil} />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}