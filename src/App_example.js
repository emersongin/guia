
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import config from './config';

const api = axios.create(config);

const App = () => {
    const [events, setEvents] = useState([{title: 'null'}]);

    const getEvents = async () => {
        try {
            console.warn('iniciou!');

            const { data } = await api.get('events');

            setEvents(data);

            console.warn(data);

        } catch (error) {
            console.warn({...error});

        }
    };

    useEffect(() => {
        getEvents();
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
