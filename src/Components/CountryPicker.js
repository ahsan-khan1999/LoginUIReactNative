/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable jsx-quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { Container, Header, Content, Icon, Picker, Form } from "native-base";
// import { GlobalData } from '../Components/FetchData';
import { getCountries } from './FetchData';
export default function CountryPicker({ handleCountryChange ,country}) {
    let [countries, setCountries] = useState([]);
    useEffect(() => {
        async function getData() {

            const data = await getCountries();
            await setCountries(data);
            // console.log(data);
        }
        getData();
    }, []);

    return (
        <Container>
            <Content>
                <Form>
                    <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        placeholder="Select your SIM"
                        placeholderStyle={{ color: "#bfc6ea" }}
                        placeholderIconColor="#007aff"
                        style={{ width: undefined }}
                        selectedValue={country}

                        onValueChange={(value) => handleCountryChange(value)}
                    >
                        <Picker.Item label="GLobal" />
                        {
                            Object.values(countries).map((country, index) => {
                                return <Picker.Item label={country} value={country} key={index} />;
                            })
                        }
                    </Picker>
                </Form>
            </Content>

        </Container>
    )
}
