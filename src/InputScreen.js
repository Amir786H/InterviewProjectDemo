import React, { useEffect, useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { StyleSheet, Text, Image, View, TouchableOpacity, Platform } from "react-native";
import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';

export default function InputScreen({ navigation }) {

  const [name, setName] = useState("")
  const [greetings, setGreetings] = useState("")
  const [pic, setPic] = useState(false)
  const [filePath, setFilePath] = useState({});  //Image picker


  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };


  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };


  const captureImage = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        setFilePath(response);
      });
    }
  };


  // ========================================================================


  const passData = () => {
    // alert(value,'  ', greetings)
    let messageObj = {
      name: name,
      greetings: greetings
    }
    navigation.navigate("OutputScreen", { data: messageObj })
  }


  return (
    <View style={styles.container}>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonStyle}
        onPress={() => captureImage('photo')}>
        <Text style={styles.textStyle}>
          Launch Camera for Image
        </Text>
      </TouchableOpacity>

      <View style={{ width: '100%', alignItems: 'center' }}>
        <TextInput
          label="Name"
          style={{ width: '70%', backgroundColor: '#BBDEFB', height: 60 }}
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <View style={{ height: 10 }} />

        <TextInput
          label="Greeting"
          style={{ width: '70%', backgroundColor: '#BBDEFB', height: 200 }}
          value={greetings}
          numberOfLines={4}
          onChangeText={(text) => setGreetings(text)}
        />
      </View>

      <Button style={{ margin: 25 }} mode="contained" onPress={() => passData()}>
        Press me
      </Button>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B39DDB',
    alignItems: 'center',
    justifyContent: 'center'
  }
})