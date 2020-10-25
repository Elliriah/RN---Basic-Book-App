import React, { useState } from 'react';
import {ImageBackground, View, StyleSheet, Button, TextInput, Grid } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const wallpaper = { uri: "https://i.pinimg.com/originals/6f/11/c5/6f11c51b8efb2c82af6c605e9321e766.jpg" };
const picsumImages = new Array(11).fill("http://placeimg.com/640/360/any");
const numColumns = 4;

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


function HomeScreen(props) {
    const navigation = useNavigation()
  return (
      <>
   <View style={styles.container}>
   <ImageBackground source={wallpaper} style={styles.image}>
  
  {/* <Grid>
    <Row></Row>
    <Row></Row>
</Grid> */}
        </ImageBackground>
      </View>
    </> 
  );
};


export default HomeScreen;