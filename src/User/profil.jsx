import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Accessory } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import * as Actions from './store/actions';
import ImagePicker from './component/imagePicker';
import { useDispatch, useSelector } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start', // if you want to fill rows left to right
  },
  imageProfil: {
    paddingLeft: '30%',
    paddingTop: '20%',
  },
  inputProfilEmail: {
    marginTop: '70%',
    marginLeft: '-40%',
    width: 200,
    // paddingLeft: '30%',

  },
  inputProfilName: {
    marginTop: '90%',
    marginLeft: '-49%',
    width: 200,
    // paddingLeft: '30%',

  },
  inputProfilDeconnecter: {
    marginTop: '170%',
    marginLeft: '-49%',
    width: 200,
  },
});

function ProfilScreen() {
  const [email, setText] = React.useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);

  console.log("USER==", user);
  //console.log("USER===", user);
  var avatar = null
  if (user.userInfo.user.avatar !== null) {
    
    avatar = user.userInfo.user.avatar.url;
  }
  else {
    avatar = null
  }
  
  console.log(avatar);
  return (
    <>
      <View style={[styles.container]}>
        <View style={[styles.imageProfil]}>
          <Avatar
            size="xlarge"
            source={{
              uri: avatar,
            }}
          >
            <Accessory />
          </Avatar>
        </View>
        <TextInput
          style={[styles.inputProfilEmail]}
          label="Email"
          value="eloise@gmail.com"
          onChangeText={(value) => setText(value)}
        />
        <TextInput
          style={[styles.inputProfilName]}
          label="Name"
          value="Eloïse Boyer"
          onChangeText={(value) => setText(value)}
        />
        <Button
          title="Se connecter "
          color="#5D453B"
          onPress={() => dispatch(Actions.logoutUser())}
          type="outline"
        />
        <View style={[styles.inputProfilDeconnecter]}>
          <Button
            title="Se déconnecter "
            color="#5D453B"
            onPress={() => navigation.navigate('Home')}
            type="outline"
          />
        </View>
        <ImagePicker/>
      </View>
    </>
  );
}

export default ProfilScreen;
