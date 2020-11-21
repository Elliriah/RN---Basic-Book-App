import React, { useState } from 'react';
import {
  ImageBackground, View, StyleSheet, Button, TextInput,
} from 'react-native';
import { useDispatch } from 'react-redux';
import * as Actions from './store/actions';
// const wallpaper = { uri: 'https://i.pinimg.com/originals/6f/11/c5/6f11c51b8efb2c82af6c605e9321e766.jpg' };

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
    resizeMode: 'cover',
    justifyContent: 'center',
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
    backgroundColor: 'rgba(93,69,59,0.48)',
  },
});

function RegisterScreen() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={require('../../public/wallpaper.jpg')} style={styles.image}>
          <View style={styles.cardOpacity}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              autoCapitalize="none"
              placeholderTextColor="black"
              onChangeText={(value) => setUsername(value)}
              defaultValue={username}
              autoCompleteType="username"
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              autoCompleteType="email"
              autoCapitalize="none"
              placeholderTextColor="black"
              onChangeText={(value) => setEmail(value)}
              defaultValue={email}
            />
            <TextInput
              style={styles.input}
              autoCompleteType="password"
              placeholder="Password"
              secureTextEntry
              autoCapitalize="none"
              placeholderTextColor="black"
              onChangeText={(value) => setPassword(value)}
              defaultValue={password}
            />
            <Button
              title="S'inscrire "
              color="#5D453B"
              onPress={() => dispatch(Actions.registerUser({ username, email, password }))}
              type="outline"
            />
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

export default RegisterScreen;
