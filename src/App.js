import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import config from './config/Config';

const api = axios.create(config);

const App = () => {
    const [test, setTest] = useState({msg: 'sem sinal!'});

    const getTest = async () => {
        try {
            console.warn('...');

            const { data } = await api.get('/api');

            console.warn(data);

            setTest(data);

        } catch (error) {
            console.warn({...error});

        }
    };

    useEffect(() => {
        getTest();
    }, []);

    return (
        <View>
            <Text>{test.msg.event_date}</Text>
        </View>
    );
};

export default App;
