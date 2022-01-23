import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    View,
    Text,
    Image,
    TextInput,
    Button,
    TouchableOpacity } from 'react-native';
import styles from './css';
import { Colors } from '../../config/Config';

const Login = () => {
    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.safeView}>
                <View style={styles.viewContentCenter}>
                    <Image style={styles.frame}/>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder="Usuário" placeholderTextColor="#aaa"/>
                    <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#aaa"/>
                </View>
                <View>
                    <Button style={styles.actionButton} color={Colors.primary} title="Entrar"/>
                    <Text style={styles.text}>Esqueceu a senha?</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.createAccontButton} color={Colors.primary}>
                        <Text style={styles.textButton}>Criar nova conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Login;
