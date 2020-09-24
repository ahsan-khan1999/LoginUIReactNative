/* eslint-disable react/self-closing-comp */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
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
import CountryPicker from '../Components/CountryPicker';
import AnimateNumber from 'react-native-countup'
const Home = () => {
    const [country, setCountry] = useState('');
    const [cases, setCases] = useState({});
    useEffect(() => {
        async function getData() {
            const data = await GlobalData();
            // await console.log(data);
            await setCases(data);
        }
        getData();

    }, []);

    async function handleCountriesChange(country) {
        let data = await GlobalData(country);
        setCases(data);
        setCountry(country);
        console.log(country)


    }
    // console.log(cases)
    return (
        <Container>

            <Content padder>
                <Card>


                    <CardItem style={{ height: 80, backgroundColor: 'pink', borderBottomColor: 'red', borderBottomWidth: 5, display: 'flex' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', justifyContent: 'center' }}>Total Deaths           ~{"         "}</Text>

                        <AnimateNumber initial={0} value={Object.values(cases)[0]} timing="easeIn" style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 5 }} />


                    </CardItem>
                    <CardItem style={{ height: 80, backgroundColor: 'grey', borderBottomColor: 'orange', borderBottomWidth: 5, display: 'flex' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Confirmed Case    ~{"     "}</Text>
                        <AnimateNumber initial={0} value={Object.values(cases)[2]} timing="easeIn" style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 5 }} />


                    </CardItem>
                    <CardItem style={{ height: 80, backgroundColor: 'lightblue', borderBottomColor: 'black', borderBottomWidth: 5, display: 'flex' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Recovered Case    ~{"     "}</Text>
                        <AnimateNumber initial={0} value={Object.values(cases)[1]} timing="easeIn" style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 5 }} />


                    </CardItem>



                </Card>
                <CountryPicker handleCountryChange={handleCountriesChange} country={country} />
            </Content>

        </Container>
    );
};
export default Home;

// const style = StyleSheet.create({

// });