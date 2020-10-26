import React, { useState } from 'react';
import {ImageBackground, View, StyleSheet, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const wallpaper = { uri: "https://i.pinimg.com/originals/6f/11/c5/6f11c51b8efb2c82af6c605e9321e766.jpg" };

const styles = StyleSheet.create({
  input: {
    width: 395,
    // height: 55,
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
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },  
  buttonSubmit: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 35,
  },
  cardOpacity: {
    paddingBottom: 20,
    marginTop: 20,
    backgroundColor: 'rgba(93,69,59,0.48)'
  }
});   


function RegisterScreen(props) {
    const navigation = useNavigation()

  return (
      <>
   <View style={styles.container}>
   <ImageBackground source={wallpaper} style={styles.image}>
      <View style={styles.cardOpacity}>
   {/* <Text h1 style={{fontSize: 30, marginBottom: 20}}>Se connecter</Text> */}
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='black'
        />
           <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='black'
        />
     <Button
  title="S'inscrire "
  color="#5D453B"
  onPress={() =>
    navigation.navigate('Home')
  }
  type="outline"
/>
</View>
        </ImageBackground>
      </View>
    </> 
  );
};


export default RegisterScreen;