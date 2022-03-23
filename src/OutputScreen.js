import React, { useState } from "react";
import { StyleSheet, Text, Image, View, TextInput, ScrollView, FlatList, ActivityIndicator } from "react-native";

import { useNavigation, useTheme } from '@react-navigation/native';


const OutputScreen = ({ route }) => {

    console.log('GGGGG',route.params.data)

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 16,fontWeight: 'bold'}}> {route.params.data.name} </Text>
            <Text style={{fontSize: 22,fontWeight: 'bold'}}> {route.params.data.greetings} </Text>
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

export default OutputScreen