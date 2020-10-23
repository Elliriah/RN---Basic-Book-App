import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const CreateAccount = ({ navigation }) => {
  return (
    <>
    <TextInput
    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    value={email} />
      <TextInput
    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    value={password} />
    {/* <Button onPress={() => navigation.navigate('Login')}> */}
    {/* Créer le compte */}
    {/* </Button> */}
    </> 
  );
};

export default CreateAccount;