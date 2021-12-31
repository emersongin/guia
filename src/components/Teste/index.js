import React from 'react';
import { Text } from 'react-native';
import styles from './style';

const test = (props) => {
    return (
        <Text style={styles.main}>{props.text}</Text>
    );
};

export default test;
