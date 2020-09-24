/* eslint-disable keyword-spacing */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
let uri = 'https://covid19.mathdro.id/api';
export async function GlobalData(country) {

    let data = '';
    if (!country) {
        const response = await fetch(uri);
        data = await response.json();
    }
    else {
        const response = await fetch(`${uri}/countries/${country}`);
        data = await response.json();
    }


    // console.log(response);
    const modifiedData = {
        deaths: data.deaths.value,
        recovered: data.recovered.value,
        confirmed: data.confirmed.value,
    };
    return modifiedData;
}

export async function getCountries() {
    let resp = await fetch(`${uri}/countries`);
    let {countries} = await resp.json();

    return countries.map((d) => d.name);
}