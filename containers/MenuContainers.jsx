import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import { scale } from '../constants/Dimention'


export default function MenuContainers({navigation}) {
    return (
        <>
            <View style={styles.menuSection}>
                <TouchableOpacity style={styles.box} onPress={()=>{navigation.navigate('Packages')}}>
                   
                        <Image source={require('../assets/Images/Home/Icons/Leaves.png')} style={styles.imageStyle} />
                        <Text style={{ fontSize: scale(39) }}>Packages</Text>
                    

                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={()=>{navigation.navigate('Purchases')}} >
                    <Image source={require('../assets/Images/Home/Icons/History.png')} style={styles.imageStyle} />
                    <Text style={{ fontSize: scale(39) }}>Purchases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={()=>{navigation.navigate('Sale')}} >
                    <Image source={require('../assets/Images/Home/Icons/Price.png')} style={styles.imageStyle} />
                    <Text style={{ fontSize: scale(39) }}>Sales</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.menuSection}>
                <TouchableOpacity style={styles.box} onPress={()=>{navigation.navigate("Billing")}}>
                    <Image source={require('../assets/Images/Home/Icons/Invoice.png')} style={styles.imageStyle} />
                    <Text style={{ fontSize: scale(39) }}> Billing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={()=>{navigation.navigate("Payments")}}>
                    <Image source={require('../assets/Images/Home/Icons/Money.png')} style={styles.imageStyle}  />
                    <Text style={{ fontSize: scale(39) }}>Payments</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={()=>{navigation.navigate("Report")}}>
                    <Image source={require('../assets/Images/Home/Icons/Report.png')} style={styles.imageStyle}  />
                    <Text style={{ fontSize: scale(39)}}>Reports</Text>
                </TouchableOpacity>

            </View>
        </>
    )
}


const styles = StyleSheet.create({
    menuSection: {
        flexDirection: 'row',
        marginHorizontal: scale(50),
        justifyContent: 'space-between',
        marginBottom: scale(40)

    },
    box: {
        height: scale(275),
        width: scale(300),
        borderRadius: scale(20),
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.10,
        elevation: 2,
    },
    imageStyle:{
        width: scale(100),
         height: scale(100),
         marginBottom:scale(20) 
    }
})