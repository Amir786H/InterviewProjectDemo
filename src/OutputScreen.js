import React, { useState } from "react";
import { StyleSheet, Text, Image, View, TextInput, ScrollView, ImageBackground, ActivityIndicator } from "react-native";

// import { useNavigation, useTheme } from '@react-navigation/native';




const OutputScreen = ({ route }) => {

    // console.log('GGGGG', route.params.data)

    const image = { uri: route.params.data.pic };

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}> {route.params.data.name} </Text>
                <Text style={{ fontSize: 28, fontWeight: 'bold' }}> {route.params.data.greetings} </Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B39DDB',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: 'center',
      }
})

export default OutputScreen