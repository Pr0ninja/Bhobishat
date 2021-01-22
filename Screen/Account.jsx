import React from 'react'
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native'
import { scale } from '../constants/Dimention'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../components/Header'



export default function Account({ navigation }) {
    return (
        <ImageBackground source={require('../assets/Images/Common/BG.png')} style={{ flex: 1 }}>

            <Header navigation={navigation} navigationPage={'Account'} />
            <ImageBackground style={{ width: scale(1080), height: scale(800), alignItems: 'center', justifyContent: 'center' }} source={require('../assets/Images/Account/BG.png')} >
                <Image source={require('../assets/Images/Account/ProfileImage.png')} style={{ borderRadius: 131, borderColor: 'white', borderWidth: 2, width: scale(262), height: scale(262), marginTop: scale(20) }} />
                <View style={{ marginTop: scale(40), alignItems: 'center' }} >
                    <Text style={{ fontSize: scale(70), color: 'white', marginBottom: scale(20) }}>Subhajit Ghose</Text>
                    <Text style={{ fontSize: scale(40), color: 'white' }}>City Center ,Haldia,721137</Text>
                    <Text style={{ fontSize: scale(40), color: 'white' }}>Purba Medinipur,West Bengal</Text>
                </View>


            </ImageBackground>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.box} onPress={() => { navigation.navigate('Profile') }}>
                    <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                        <FontAwesome name="user" size={scale(100)} color="#2676e1" style={{ marginRight: scale(47) }} />
                        <Text style={{ fontSize: scale(45) }}>Profile</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>

                        <AntDesign name="right" size={24} color="#cfcfcf" />

                    </View>



                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={() => { navigation.navigate('OrderNotification') }} >
                    <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                        <MaterialCommunityIcons name="bell-check" size={scale(100)} color="#50c37f" style={{ marginRight: scale(47) }} />
                        <Text style={{ fontSize: scale(45) }}>Notification Settings</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>

                        <AntDesign name="right" size={24} color="#cfcfcf" />

                    </View>



                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    box: {
        width: scale(980),
        height: scale(175),
        borderRadius: scale(10),
        backgroundColor: "#ffffff",
        shadowColor: "#e9e9e9",
        shadowOffset: {
            width: scale(0),
            height: scale(10)
        },
        shadowRadius: scale(15),
        shadowOpacity: scale(1), elevation: 8, marginTop: scale(50), justifyContent: 'center',
        flexDirection: 'row'
    }
})