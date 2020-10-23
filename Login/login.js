import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [email, password] = "";
  return (
      <>
    <TextInput
    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    value={email} />
    <br/>
      <TextInput
    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    value={password} />
    <Button title="Login">
    </Button>
    {/* <Button onPress={() => navigation.navigate('CreateAccount')}>
    Créer un compte
    </Button> */}
    </> 
  );
};

export default LoginScreen;