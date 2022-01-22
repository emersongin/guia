import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, Button } from 'react-native';
import styles from './css';
import { Colors } from '../../config/Config';

const Login = () => {
    return (
        <View style={styles.background}>
            <View>
                <Image style={styles.frame}/>
            </View>
            <View style={styles.safeView}>
                <TextInput placeholder="Oauth"/><TextInput/>
                <TextInput placeholder="Usuário"/><TextInput/>
                <TextInput placeholder="Senha"/><TextInput/>
                <Button style={styles.actionButton} color={Colors.primary} title="Entrar"/>
            </View>
        </View>
    );
};

export default Login;
