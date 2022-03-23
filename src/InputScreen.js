import React, { useEffect, useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { StyleSheet, Text, Image, View, ScrollView, FlatList } from "react-native";
import { RNCamera } from 'react-native-camera';

export default function InputScreen({ navigation }) {

  const [name, setName] = useState("")
  const [greetings, setGreetings] = useState("")
  const [pic, setPic] = useState(false)

  takePicture = async () => {
    if (this.camera && !pic) {

      let options = {
        quality: 0.85,
        fixOrientation: true,
        forceUpOrientation: true,
      };

      setPic({ pic: true });

      try {
        const data = await this.camera.takePictureAsync(options);
        Alert.alert('Success', JSON.stringify(data));
      } catch (err) {
        Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
        return;
      } finally {
        this.setState({ pic: false });
      }
    }
  };


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