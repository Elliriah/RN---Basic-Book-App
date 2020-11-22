import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageBackground, View, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import { useDispatch } from 'react-redux';
import * as Actions from './store/actions';
import imagebg from '../../public/wallpaper.jpg';

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
  touchableContainer: {
    flex: 1,
  },
});

function LoginScreen() {
  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  );

  DismissKeyboard.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const dispatch = useDispatch();
  let username = '';
  let password = '';
  return (
    <>
      <DismissKeyboard>
        <View style={styles.container}>
          <ImageBackground source={imagebg} style={styles.image}>
            <View style={styles.cardOpacity}>
              <TextInput
                style={styles.input}
                placeholder="Username"
                autoCapitalize="none"
                placeholderTextColor="black"
                onChangeText={(value) => { username = value; }}
                defaultValue={username}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                autoCapitalize="none"
                placeholderTextColor="black"
                onChangeText={(value) => { password = value; }}
                defaultValue={password}
              />
              <View style={[{ width: '90%', margin: 15 }]}>
                <Button
                  title="Se connecter "
                  color="#5D453B"
                  onPress={() => dispatch(Actions.authUser({ identifier: username, password }))}
                  type="outline"
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      </DismissKeyboard>
    </>
  );
}

export default LoginScreen;
