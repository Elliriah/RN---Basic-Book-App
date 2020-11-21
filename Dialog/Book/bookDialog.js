import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View, Image, TouchableHighlight} from "react-native";
import Modal, { ModalContent } from 'react-native-modal';



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
    // paddingBottom: 20,
    // marginTop: 20,
    backgroundColor: 'rgba(255,255,255, 0.8);',
    width: '100%',
    height: '100%'
  },
  bookCard: {
   marginRight: 50,
   left: 110,
   paddingBottom: 50,
  },
  favorite_container: {
    alignItems: 'center', // Alignement des components enfants sur l'axe secondaire, X ici
  },
  favorite_image: {
    width: 40,
    height: 40,
    left: 50,
    top: 40,
    zIndex: 10
  }
});   

function BookDialog(props) {
const bookOne = { uri: "https://i.pinimg.com/originals/6f/11/c5/6f11c51b8efb2c82af6c605e9321e766.jpg" };
  console.log("bookDialogProps======", props);

  if (props.data === null) {
    return null 
  } else {
    return (

          <View>
    <Modal isVisible={props.display} onBackdropPress={() => {props.onClose()}}>
          <View style={styles.cardOpacity}>
            <View style={styles.bookCard}>
            <Text style={{color: "black", fontSize: 50, left: 30, top: 20}}>{props.data.title}</Text>
            <TouchableHighlight
          style={styles.favorite_container}
          onPress={() => {props.onClose()}}>
          <Image source={require('../../public/icon/favorite.png')} style = {styles.favorite_image} />          

          </TouchableHighlight>
            <Image source={{uri: props.data.img.url}} style={{zIndex: -1,right: 40, width: 250, height: 300}}/>
            <View
              style={{
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
                right: 80,
                top: 15
              }}/>
            <View style={{width: '100%', right: 80}}>
              <ScrollView>
            <Text style={{color: "black", fontSize: 20, top: 20}}>
              {props.data.description}
            </Text>
            </ScrollView>
            </View>
          </View>
          <Button title="Fermer" onPress={() => {props.onClose()}} />
          </View>
        </Modal>
      </View>
    )
  }
}

export default BookDialog;