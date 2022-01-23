import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../config/Config';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        width: windowWidth,
        height: windowHeight,
        alignItems: 'center',
    },
    safeView: {
        flex: 1,
        width: windowWidth / 100 * 90,
        paddingTop: 20,
        paddingBottom: 20,
    },
    viewContentCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    frame: {
        width: 192,
        height: 192,
        backgroundColor: Colors.grey,
        borderRadius: 100,
    },
    text: {
        height: 40,
        marginBottom: 40,
        color: Colors.light,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    textButton: {
        color: Colors.light,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    input: {
        height: 40,
        backgroundColor: Colors.light,
        color: Colors.dark,
        padding: 10,
        marginBottom: 10,
    },
    actionButton: {
        minHeight: 100,
        maxHeight: 100,
        padding: 100,
    },
    createAccontButton: {
        alignItems: 'center',
        backgroundColor: Colors.background,
        borderWidth: 1,
        borderColor: Colors.light,
        borderRadius: 2,
        padding: 10,
    },
});

export default styles;
