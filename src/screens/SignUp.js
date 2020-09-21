/* eslint-disable quotes */
/* eslint-disable keyword-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import { View, Text, TextInput ,StyleSheet,Button,ImageBackground} from 'react-native';
// import { Button } from 'react-bootstrap';
import Login from './Login';
export default function SignUp({navigation}) {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signUpUser = () => {
        if(email && username && password){
            setUsername('');
            setEmail('');
            setPassword('');
            alert('Successfully !');
        }
        else{
            alert("Not Successful");
        }
    };

    const image = { uri: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" };
    return (
        <ImageBackground source={image} style={style.image}>
        <View style={{marginTop:100}}>
        <Text style={{fontWeight:'bold',fontSize:25,textAlign:'center',color:'pink'}}>SignUp Screen</Text>    
            <View >
                <TextInput placeholder="Enter UserName" autoFocus={true} blurOnSubmit={true} value={username} onChangeText={(e) => setUsername(e)} style={style.input} ></TextInput>
                <TextInput placeholder="Enter Email"  autoFocus={true} blurOnSubmit={true} value={email} onChangeText={(e) => setEmail(e)} style={style.input}></TextInput>
                <TextInput placeholder="Enter Password" autoFocus={true} blurOnSubmit={true} secureTextEntry={true} value={password} onChangeText={(e) => setPassword(e) } style={style.input}></TextInput>
            </View>
            <View style={style.butt}>
                <Button title='SignUp' onPress={() => signUpUser()}></Button>

            </View>
            <Text style={{fontSize:16,marginTop:10,textAlign:'center',fontWeight:'bold',color:'pink'}} onPress={() =>navigation.navigate('Login') }>Don't Have An Account? Login Here</Text>
        </View>
        </ImageBackground>
    );
}
const style = StyleSheet.create({
    input:{
        marginLeft:20,
        backgroundColor:'pink',
        marginTop:20,
        width:'90%',
        textAlign:'center',
        marginBottom:10,
        borderRadius:10,
        borderBottomColor:'red',
        borderWidth:3,

    },
    butt:{
        width:'90%',
        marginTop:10,
        marginLeft:20,
        
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