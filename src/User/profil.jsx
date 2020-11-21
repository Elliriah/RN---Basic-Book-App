import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Accessory } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './store/actions';
import ImagePicker from './component/imagePicker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
    alignItems: 'flex-start', // if you want to fill rows left to right
  },
  imageProfil: {
    paddingLeft: '30%',
    paddingTop: '20%',
  },
  inputProfilEmail: {
    marginTop: '50%',
    marginLeft: '-40%',
    width: 200,
    // paddingLeft: '30%',

  },
  inputProfilName: {
    marginTop: '90%',
    marginLeft: '-40%',
    bottom: '10%',
    width: 200,
    // paddingLeft: '30%',

  },
  inputProfilDeconnecter: {
    marginTop: '170%',
    marginLeft: '-49%',
    width: 200,
  },
  viewInput : {
    left: '20%'
  },
  viewButton : {
    marginBottom: '100%'
  }
});

function ProfilScreen() {
  const [email, setText] = React.useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);

  console.log('USER==', user);
  // console.log("USER===", user);
  let avatar = null;
  if (user.userInfo.user.avatar !== null) {
    avatar = user.userInfo.user.avatar.url;
  } else {
    avatar = null;
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
          <ImagePicker />

        </View>
        <View style={styles.viewInput}>
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
          <View style={styles.viewButton}>
            <Button
              title="Se deconnecter  "
              backgroundColor="black"
              onPress={() => dispatch(Actions.logoutUser())}
              type="outline"
            />
          </View>
        </View>
      </View>
    </>
  );
}

export default ProfilScreen;
