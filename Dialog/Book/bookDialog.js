import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View, Image} from "react-native";
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
    paddingBottom: 20,
    marginTop: 20,
    backgroundColor: 'rgba(255,255,255,0.12);'
  },
  bookCard: {
   marginRight: 50,
   left: 110,
   paddingBottom: 50,
  },
});   

function BookDialog(props) {
const bookOne = { uri: "https://i.pinimg.com/originals/6f/11/c5/6f11c51b8efb2c82af6c605e9321e766.jpg" };
const [setModalVisible] = useState(false);

  return (
        <View>
  <Modal isVisible={props.display} onBackdropPress={() => {props.onClose()}}>
         <View style={styles.cardOpacity}>
           <View style={styles.bookCard}>
          <Text style={{color: "white"}}>Titre</Text>
          <Image source={bookOne} style={{width: 135, height: 170}}/>
            <ScrollView>
          <Text style={{color: "white"}}>Description</Text>
          </ScrollView>
        </View>
        <Button title="Fermer" onPress={() => {props.onClose()}} />
        </View>
      </Modal>
    </View>
  );
}

export default BookDialog;