import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../config/Config';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    safeView: {
        width: windowWidth / 100 * 90,
    },
    background: {
        backgroundColor: Colors.background,
        width: windowWidth,
        height: windowHeight,
        alignItems: 'center',
    },
    frame: {
        width: 192,
        height: 192,
        backgroundColor: Colors.grey,
        borderRadius: 100,
    },
    input: {

    },
    lightText: {
        backgroundColor: Colors.light,
        width: windowWidth,
        height: windowHeight,
        borderRadius: 2,
    },
    actionButton: {
        minHeight: 100,
        maxHeight: 100,
        padding: 100,
    },
    createAccontButton: {

    },
});

export default styles;
