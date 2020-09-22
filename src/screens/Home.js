/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';

import { GlobalData } from '../Components/FetchData';
import { Content, Card, CardItem, Text, Body, View, Container } from "native-base";
import StyleSheet from 'react-native';
const Home = () => {
    const [cases, setCases] = useState({});
    useEffect(() => {
        async function getData() {
            const data = await GlobalData();
            // await console.log(data);
            await setCases(data);
        }
        getData();

    }, []);

    console.log(cases)
    return (
        <Container>

            <Content padder>
                <Card>


                    <CardItem style={{backgroundColor:'pink',borderBottomColor:'red',borderBottomWidth:5}}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Total Deaths</Text>
                        <Text style={{ marginLeft: 185, fontSize: 20, fontWeight: 'bold' ,marginBottom:5 }}>{Object.values(cases)[0]}</Text>


                    </CardItem>
                    <CardItem style={{backgroundColor:'grey',borderBottomColor:'orange',borderBottomWidth:5}}>
                        <Text style={{  fontSize: 20, fontWeight: 'bold' }}>Confirmed Case</Text>
                        <Text style={{ marginLeft: 130, fontSize: 20, fontWeight: 'bold',marginBottom:5 }}>{Object.values(cases)[2]}</Text>


                    </CardItem>
                    <CardItem style={{backgroundColor:'lightblue',borderBottomColor:'black',borderBottomWidth:5}}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Recovered Case</Text>
                        <Text style={{ marginLeft: 130, fontSize: 20, fontWeight: 'bold' }}>{Object.values(cases)[1]}</Text>


                    </CardItem>



                </Card>
            </Content>
        </Container>
    );
};
export default Home;

// const style = StyleSheet.create({

// });