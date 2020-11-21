import React from 'react';
import {
  ImageBackground, View, StyleSheet, Button, TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import * as Actions from './store/actions';

const styles = StyleSheet.create({
  input: {
    width: 395,
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
    resizeMode: 'cover',
    justifyContent: 'center',
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

function LoginScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const imagebg = require('../../public/wallpaper.jpg');
  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={imagebg} style={styles.image}>
          <View w style={styles.fixToText}>
            <View style={[styles.buttonSubmit]}>
              <Button
                title="S'inscrire "
                color="#5D453B"
                style={styles.buttonSubmit}
                onPress={() => navigation.navigate('Register')}
              />
            </View>
          </View>
          <View style={styles.cardOpacity}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              autoCapitalize="none"
              placeholderTextColor="black"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              autoCapitalize="none"
              placeholderTextColor="black"
            />
            <Button
              title="Se connecter "
              color="#5D453B"
              onPress={() => dispatch(Actions.authUser({ identifier: 'midosol', password: 'test123' }))}
              type="outline"
            />
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

export default LoginScreen;
