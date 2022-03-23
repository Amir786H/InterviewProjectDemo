import 'react-native-gesture-handler';

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import InputScreen from './src/InputScreen';
import OutputScreen from "./src/OutputScreen";

const Stack = createStackNavigator();


// export default () => {
//   return (
//       <Navigation />
//   )
// }
export function Navigation() {

  return (
    // <View style={styles.container}>
    //   {/* <Home /> */}
    //   <SearchScreen />
    // </View>

    <NavigationContainer style={{backgroundColor: '#FAFAFA'}}>
      <Stack.Navigator initialRouteName="InputScreen" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='InputScreen' component={InputScreen} />
        <Stack.Screen name='OutputScreen' component={OutputScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}


const App = () => {

  return (
    <View style={{ flex: 1, backgroundColor: '#FAFAFA' }}>
      <Navigation />
    </View>
  );
};




const styles = StyleSheet.create({

});

export default App;
