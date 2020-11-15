import React, { useState } from 'react';
import {Image, ScrollView, TouchableWithoutFeedback, Text, View, StyleSheet, Button, TextInput, Grid, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Searchbar } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookDialog from '../../Dialog/Book/bookDialog.js';
const Stack = createStackNavigator();
// import Book from './bookDialog.js';

const wallpaper = { uri: "https://i.pinimg.com/originals/6f/11/c5/6f11c51b8efb2c82af6c605e9321e766.jpg" };
const bookOne = { uri: "https://i.pinimg.com/originals/6f/11/c5/6f11c51b8efb2c82af6c605e9321e766.jpg" };

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
      }, 
      searchbarSize: {
        width: 600,
        top: 30,
        marginBottom: 20
      },
      listBook: {
        top: 11
      }
});   


function HomeScreen(props) {
    const navigation = useNavigation()
    const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [modalbool, setModelbool] = React.useState(false);

  const onPressModal = () => {
     setModelbool(true);
   };

  const onCloseModal = () => {
    setModelbool(false);
  };

   console.log(modalbool);
  return (
 
      <>
        <BookDialog display={modalbool} onClose={onCloseModal}/>
        <Searchbar
        style={[styles.searchbarSize]}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
      <ScrollView>
    <View style={[styles.listBook]}>
   <View style={[styles.container]}>
 
        <View style={styles.column1}>
             
            <TouchableWithoutFeedback onPress={() => onPressModal()}>
             <View style={styles.item}>
             <Image source={bookOne} style={{width: 135, height: 170}}/>
             </View>
             </TouchableWithoutFeedback>
        </View>
      
      </View>
      </View> 
      </ScrollView>
    </> 
  );
};


export default HomeScreen;