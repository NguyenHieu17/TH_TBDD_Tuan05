import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity } from 'react-native';


function Screen1({route, navigation}) { 
    var [image, setImage] = useState();
    useEffect(()=>{
        setImage(route.params);
    },[route.params])

    return ( 
        <View style={styles.container}>
            <Image
            style={styles.smartPhone}
            source={route.params || require('../image/vs_blue.png')}
            resizeMode='contain'
            />

            <Text style={[styles.text, {marginLeft:20, marginTop:20}]}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>

            <View style={styles.starContainer}>
                <Image
                style={styles.star}
                source={require('/image/star.png')}
                />

                <Image
                style={styles.star}
                source={require('/image/star.png')}
                />

                <Image
                style={styles.star}
                source={require('/image/star.png')}
                />

                <Image
                style={styles.star}
                source={require('/image/star.png')}
                />

                <Image
                style={styles.star}
                source={require('/image/star.png')}
                />

                <Text style={styles.reviews}>(Xem 828 đánh giá)</Text>
            </View>

            <View style={styles.starContainer}>
                <Text style={[styles.text, {fontSize:18}]}>1.790.000 đ</Text>
                <Text style={[styles.text1,styles.text]}>1.790.000 đ</Text>

            </View>

            <View style={styles.starContainer}>
                <Text style={[styles.text, styles.text2]}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                <Image
                    style={styles.question}
                    source={require('/image/Group 1.png')}
                />
            </View>

            <View>
                <TouchableOpacity style={styles.btnChonMau} onPress={()=>{
                    navigation.navigate('Screen2')
                }}>
                    <Text style={[styles.text, {fontSize:15}]}>4 MÀU - CHỌN MÀU</Text>
                    <Image
                        style={styles.Vector}
                        source={require('/image/Vector.png')}
                        />
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles.btnChonMua} onPress={()=>alert('bạn đã mua thành công!!!')}>
                    <Text style={[styles.text, {fontSize:20, color:'white'}]}>CHỌN MUA</Text>
                </TouchableOpacity>
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
    },

    smartPhone: {
        width: 301,
        height: 361,
        marginLeft: 10,
    },
    starContainer: {   
        marginTop: 20,
        flexDirection: 'row',
        alignSelf:"flex-start",
        justifyContent:"center",
        marginLeft:20,
        
    },

    star: {
        width: 23,
        height: 25,
        
    },

    reviews: {
        marginLeft: 30,
        textAlign:"center"
    },

    text: {
        fontFamily: 'Roboto',
        
        fontStyle: 'normal',
        fontWeight: 700,    
    },

    text1: {
        textDecorationLine: "line-through",
        fontSize: 15,
        marginLeft: 30,
        marginTop: 3,
    },

    question: {
        width: 20,
        height: 20,
        marginLeft: 10,
        marginTop: -5,
    },

    text2: {
        color: '#FA0000',
        fontSize: 12,
    }, 

    btnChonMau: {
        borderWidth:1,
        width: 332,
        height:34,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 10,
        marginLeft:10,

    },

    Vector: {
        height:12,
        width:12,
        marginLeft: '90%',
        marginTop: '-15px',
    },

    btnChonMua: {
        backgroundColor: '#EE0A0A',
        marginTop: 40,
        width: 332,
        height: 34,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10,
        border: '1px solid #CA1536',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        marginLeft:10,

    }

});
export default Screen1;