
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const axios = require('axios').default;
const api = axios.create({
    baseUrl: 'http://localhost:3000',
});

const App = () => {
    const [events, setEvents] = useState([{title: 'null'}]);

    useEffect(() => {
        try {
            api.get('api/events')
                .then(({data}) => {
                    setEvents(data);
                    // console.warn(data);
            })
                .catch(function (error) {
                    console.warn(error);
            });
        } catch (error) {
            console.warn(error);

        }
    }, []);

    return (
        <View>
            {
                events?.map((item, index) => (
                    (<Text key={index}>{item.title}</Text>)
                ))
            }
        </View>
    );
};

export default App;
