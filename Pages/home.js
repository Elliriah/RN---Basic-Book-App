import React, { useState } from 'react';
import {ImageBackground, Text, View, StyleSheet, Button, TextInput, Grid } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const wallpaper = { uri: "https://i.pinimg.com/originals/6f/11/c5/6f11c51b8efb2c82af6c605e9321e766.jpg" };
const bookOne = {uri : "https://lh3.googleusercontent.com/proxy/44pP_iQbZbvrsvXXwG5NH1MJ9dtDBCtZsSOxmuadwrejD0bmoE1XoDyga2mZOnlC40TSTkLaTUIgkY56VvCytMUoBv8y5M81zt35eUeOuXBf632COduKSD6hMKYIlHjQGzIwPTrS9-7wqGDxe_KKmsRqHghO6os9PoZDtC30"}
const bookTwo = {uri : "https://lh3.googleusercontent.com/proxy/V1-uWX7jp6akrOAIuJW66n0uyi8NFqj3LveS4lx_yonUdRtiwICGUUG2j9sPRrM_0cCo_Q9t9xNkKAf_9jkHw-EvAwXG3e3r3u7J9sQ6uIXbs18pFWTgLQ"}
const bookThree = {uri : "https://lh3.googleusercontent.com/proxy/xOpEeKfG1MBRLFt-6GnNvcbiICSl7CBARSCqY6McX_PbCwdqZec2QNUFE3z2wXQJuQrd9YIzOOIn2E_L0fvB9Z_ibP57DLL5Si_7PmCeNy_UQGJmIFdDIA"}
const bookFour = {uri : "https://lh3.googleusercontent.com/proxy/cvDYOzinro6In3Le-M-0_NBdbvBKJ_zrgwqGjoHA6O-IZRgQxw-tibZuNYp1yAg-E02NcjZBnEzwnWnW3qkzi8PfH1ICrePsPbOrVISvUStHZrhXPibf1A"}
const bookFive = {uri : "https://lh3.googleusercontent.com/proxy/eaef5yYRXPDP1qxen3Ycr72FqJ2rJYYK_13Z2yQ_Y2x623iB9BC1MVcw0X7s0aGOJlmWFZAgcJ5pYPkH4rP7wCPhFewbMwx6cT0oMsfbln5u1h98k18fZQ"}
const bookSix = {uri :  "https://lh3.googleusercontent.com/proxy/QW5zBJXEsWa4e4Q6gz7BYqzjoMauQPcZjSNrH6OBuw9XXFDxUZkuMU0lKY4OsPc06WiFEi1sENl6j0rBQv_yBQ9Fk56VBcyPL5mPU7jrIovSMlbIsGjILA"}


const picsumImages = new Array(11).fill("http://placeimg.com/640/360/any");
const numColumns = 4;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
      },
      item: {
        width: '50%' // is 50% of container width
      }
});   


function HomeScreen(props) {
    const navigation = useNavigation()
  return (
      <>
   <View style={[styles.container]}>
        <View style={styles.column1}>
             <View style={styles.item}>
             <ImageBackground source={bookOne} style={{width: 135, height: 170}}/>
             </View>
             <View style={styles.item}>
             <ImageBackground source={bookTwo} style={{width: 135, height: 170}}/>
             </View>
             <View style={styles.item}>
             <ImageBackground source={bookThree} style={{width: 135, height: 170}}/>
             </View>
             <View style={styles.item}>
             <ImageBackground source={bookSix} style={{width: 135, height: 170}}/>

             </View>
        </View>
        <View style={styles.column2}>
        <View style={styles.item}>
        <ImageBackground source={bookFour} style={{width: 135, height: 170}}/>
             
             </View>
             <View style={styles.item}>
             <ImageBackground source={bookFive} style={{width: 135, height: 170}}/>
             </View>
             <View style={styles.item}>
             <ImageBackground source={bookSix} style={{width: 135, height: 170}}/>
             </View>
             <View style={styles.item}>
             <ImageBackground source={bookSix} style={{width: 135, height: 170}}/>
             </View>
        </View>
        <View style={styles.column3}>
             <View style={styles.item}>
             <ImageBackground source={bookOne} style={{width: 135, height: 170}}/>
             </View>
             <View style={styles.item}>
             <ImageBackground source={bookSix} style={{width: 135, height: 170}}/>
             </View>
             <View style={styles.item}>
             <ImageBackground source={bookFour} style={{width: 135, height: 170}}/>
             </View>
             <View style={styles.item}>
             <ImageBackground source={bookSix} style={{width: 135, height: 170}}/>
             </View>
        </View>
      </View>
    </> 
  );
};


export default HomeScreen;