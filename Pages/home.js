import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: 'white',
    margin: 10,
    padding: 8,
    color: 'black',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});   


function HomeScreen(props) {
    const navigation = useNavigation()

  return (
      <>
   <View style={styles.container}>
   <Text h1 style={{fontSize: 30, marginBottom: 20}}>Page d'accueil</Text>
      </View>
    </> 
  );
};

export default HomeScreen;