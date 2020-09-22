/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export async function GlobalData() {
    const response = await fetch('https://covid19.mathdro.id/api');
    const data = await response.json();
    // console.log(response);
    const modifiedData = {
        deaths:data.deaths.value,
        recovered:data.recovered.value,
        confirmed:data.confirmed.value,
    };
    return modifiedData;
}
