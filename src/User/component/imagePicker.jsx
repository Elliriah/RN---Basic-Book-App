import React, { useState, useEffect } from 'react';
import {
  Button, Image, View, Platform,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import * as Actions from '../store/actions';

export default function ImagePickerComponent() {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const user = useSelector((state) => state.userReducer.user);
  const idUser = user.userInfo.user.id;

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert("Désolé, nous avons besoin de l'autorisation permettant d'utiliser la camera pour utiliser ça");
        }
        const statusCamera = await ImagePicker.requestCameraPermissionsAsync();
        if (statusCamera.status !== 'granted') {
          alert("Désolé, nous avons besoin de l'autorisation permettant d'utiliser la camera pour utiliser ça");
        }
      }
    })();
  }, []);

  const pickImage = async () => {


    //const result = await ImagePicker.launchImageLibraryAsync({
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (result.cancelled === true) {
      return;
    }
    const formData = new FormData();
    const localUri = result.uri;
    const filename = localUri.split('/').pop();
    const match = /\.(\w+)$/.exec(filename);
    const type = match ? `image/${match[1]}` : 'image';

    formData.append('files', { uri: result.uri, name: 'yoloss', type });
    formData.append('ref', 'user');
    formData.append('refId', idUser);
    formData.append('field', 'avatar');
    formData.append('source', 'users-permissions');
    console.log('Acgtions===', Actions);
    axios
      .post('https://dark-nightmare-23481.herokuapp.com/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        dispatch(Actions.getUserInfo(user.token));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={{ }}>
      <Button title="Modifier " onPress={pickImage} />
      {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
    </View>
  );
}
