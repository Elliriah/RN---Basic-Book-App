import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View, Image, TouchableHighlight} from "react-native";
import Modal, { ModalContent } from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions';

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
    // backgroundColor: "blue"
  },
  close: {
    zIndex: 10,
    left: "90%"
  },
  viewText : {
    width: "100%", 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  textTitre : {
    color: "black", 
    fontSize: 20
  },
  viewImage : {
    width: "100%", 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  imageBook : {
    zIndex: -1, 
    width: 200, 
    height: 300, 
    bottom: 2, 
    paddingBottom: 2
  },
  viewOne : {
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  viewDescription : {
    width: '80%', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  textDescription : {
    fontSize: 20
  },
  lineHr : {
    borderBottomColor: 'gray',
    borderBottomWidth: 2
  }
});   

function BookDialog(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  
  const addFavoris = (() => {
    dispatch(Actions.addFavoris(user.token, user.userInfo.user.id, props.data.id))
  });

  if (props.data === null) {
    return null 
  } else {
    return (
          <View>
    <Modal isVisible={props.display} onBackdropPress={() => {props.onClose()}}>
    <ScrollView>

          <View style={styles.cardOpacity}>
            <View style={styles.bookCard}>
            <TouchableHighlight
              underlayColor=""
          onPress={() => {props.onClose()}}>
          <Image source={require('../../../public/icon/close.png')} style = {styles.close} />          
          </TouchableHighlight>
          <View style={styles.viewText}>
            <Text style={styles.textTitre}>{props.data.title}</Text>
          </View>
            {/* <TouchableHighlight
          style={styles.favorite_container}
          onPress={() => {addFavoris()}}>
          <Image source={require('../../../public/icon/favorite.png')} style = {styles.favorite_image} />
          </TouchableHighlight> */}
          <View style={styles.viewImage}>
            <Image source={{uri: props.data.img.url}} style={styles.imageBook}/>
            <Button title="Favoris " />
            <Button title="Suprrimer Favoris " />
          </View>
            <View
              style={styles.lineHr}/>
            <View style={styles.viewOne}>
            <View style={styles.viewDescription}>
            <Text style={styles.textDescription}>
              {props.data.description}
            </Text>
            </View>
            </View>
          </View>
          </View>
          </ScrollView>
        </Modal>
      </View>
    )
  }
}

export default BookDialog;