/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable react/self-closing-comp */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
const Stack = createStackNavigator();
const App = () => {


  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="SignUp"
          component={SignUp}
        />

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />

      </Stack.Navigator>

    </NavigationContainer>

  );

};

export default App;
  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     flexDirection: "column"
  //   },
  //   image: {
  //     flex: 1,
  //     resizeMode: "cover",
  //     justifyContent: "center"
  //   },
  //   text: {
  //     color: "grey",
  //     fontSize: 30,
  //     fontWeight: "bold"
  //   }
  // });


//<View style={styles.container}>
  //        <ImageBackground source={image} style={styles.image}>
    //        {/* <Text>Hello World</Text> */}
      //      <Login />
        //  </ImageBackground>
        //  {/* <SignUp /> */}
        //</View>