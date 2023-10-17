import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity, Pressable } from 'react-native';

function Screen2({navigation}){
    var [image, setImage] = useState(require('/image/vs_blue.png'));
    var [color, setSColor] = useState('blue');
    
    return(
        <View style={styles.container}>
            <View style={styles.info}>
                <Image
                style={styles.smartPhone}
                source={image}
                resizeMode='contain'
                />

                <View style={[{flexDirection:'column',marginLeft: 10,marginRight:'30%'}]}>
                    <Text style={[styles.text]}>Điện Thoại Vsmart Joy 3 {'\n'}Hàng chính hãng</Text>
                    <Text style={[styles.text]}>Màu: <Text style={{fontWeight:'bold'}}>{color}</Text> </Text>
                    <Text style={[styles.text]}>Cung cấp bởi <Text style={{fontWeight:'bold'}}>Tiki Tradding</Text></Text>
                    <Text style={[styles.text,{fontWeight:'bold'}]}>1.790.000 đ</Text>
                </View>

                
            </View>

            <View style={styles.chonmau}>
                <Text style={[styles.text, {marginRight:'40%', marginTop: '-50px', fontSize: '18px'}]}>Chọn một màu bên dưới:</Text>
                <Pressable style={styles.mau1} onPress={()=>{
                    setImage(require('/image/vs_silver.png'))
                    setSColor('silver')
                }}/>
                <Pressable style={styles.mau2} onPress={()=>{
                    setImage(require('/image/vs_red.png'))
                    setSColor('red')
                }}/>
                <Pressable style={styles.mau3} onPress={()=>{
                    setImage(require('/image/vs_black.png'))
                    setSColor('black')
                }}/>
                <Pressable style={styles.mau4} onPress={()=>{
                    setImage(require('/image/vs_blue.png'))
                    setSColor('blue')
                }}/>
                
                <TouchableOpacity style={styles.btnXong} onPress={()=>navigation.navigate('Screen1',image)}>
                    <Text style={[styles.text, {fontSize: 20, color: 'white'}]}>XONG</Text>  
                </TouchableOpacity>
            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    info: {
        flex: 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        

    },

    smartPhone:{
        width: 112,
        height: 132, 
        marginLeft: '15%',
    },

    text: {
        
        fontFamily: 'Roboto',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: 400,
    },

    chonmau: {
        flex: 8,
        backgroundColor: '#C4C4C4',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    mau1: {
        width: 85,
        height: 80,
        backgroundColor: '#C5F1FB',
        marginTop: 20,
    },

    mau2: {
        width: 85,
        height: 80,
        backgroundColor: '#F30D0D',
        marginTop: 20,
    },

    mau3: {
        width: 85,
        height: 80,
        backgroundColor: '#000',
        marginTop: 20,

    },

    mau4: {
        width: 85,
        height: 80,
        backgroundColor: '#234896',
        marginTop: 20,

    },

    btnXong: {
        width: 326,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(25, 82, 226, 0.58)',
        border: '1px solid #CA1536',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        borderRadius: 10,
        marginTop: 30,
    }

});
export default Screen2;