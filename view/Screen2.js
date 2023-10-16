import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,TouchableOpacity } from 'react-native';

function Screen2(){
    return(
        <View style={styles.container}>
            <View style={styles.info}>

            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        // justifyContent: '',
        marginLeft:30,
    },
});
export default Screen2;