/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
/* eslint-disable keyword-spacing */
/* eslint-disable jsx-quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ImageBackground } from 'react-native';
import {Text,Button} from 'native-base'
import SignUp from './SignUp'
export default function Login({navigation}) {

    function addUser() {
        if (email && password) {
            alert('User added Successfully!');
            setEmail('');
            setPassword('');

        }
        else {
            alert('Please Enter Password And Email both');
        }
    }

    const image = { uri: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <ImageBackground source={image} style={style.image}>
            <View >
                <View >
                    <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', color: 'pink' }}>LogIn Screen</Text>
                    <TextInput autoFocus={true} blurOnSubmit={true} placeholder="Enter UserName" value={email} onChangeText={(e) => setEmail(e)} style={style.input} ></TextInput>

                    <TextInput placeholder="Enter Password" secureTextEntry={true} value={password} onChangeText={(e) => setPassword(e)} style={style.input} ></TextInput>
                </View>
                <View style={style.butt}>
                    {/* <Button title='LogIn' onPress={() => addUser()} /> */}
                    <Button primary onPress={() => addUser()} style={{marginLeft:38,justifyContent:'center',width:'80%',borderRadius:30}}><Text style={{fontWeight:'bold',fontSize:16}}> LogIn </Text></Button>

                </View>
                <Text style={{ fontSize: 16, marginTop: 10, textAlign: 'center', fontWeight: 'bold', color: 'pink' }} onPress={() => navigation.navigate('SignUp')}>Don't Have An Account? SignUp Here</Text>
            </View>
        </ImageBackground>
    );
}
const style = StyleSheet.create({
    input: {
        marginLeft: 20,
        backgroundColor: 'lightblue',
        marginTop: 20,
        width: '90%',
        textAlign: 'center',
        marginBottom: 10,
        borderRadius: 10,
        borderBottomColor: 'black',
        borderWidth: 3,
        fontSize:16,
        fontWeight:'bold',

    },
    butt: {
        width: '90%',
        marginTop: 10,
        marginLeft: 20,
    },
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
});