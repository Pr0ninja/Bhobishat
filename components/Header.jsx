import React from 'react'
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { scale } from '../constants/Dimention'
import { TextInput } from 'react-native-paper'

export default function Header({ navigation, navigationPage }) {
    return (
        <View style={{ height: scale(100), paddingTop: scale(50), marginTop: StatusBar.currentHeight || 0, marginBottom: scale(50) }}>
            <View style={{ flexDirection: 'row' }}>

                <View style={{ flex: 2,paddingLeft: scale(30),flexDirection:'row',alignItems:'center' }}>
                    <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                        <Image source={require('../assets/Icons/Menu.png')} style={{ width: scale(53 * 1.5), height: scale(37 * 1.5) }} />
                    </TouchableOpacity>

                    <Text style={{ fontSize: scale(50),marginLeft:scale(40) }}>{navigationPage}</Text>

                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                   
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <FontAwesome name="search" size={24} color="black" />
                    <MaterialCommunityIcons name="bell-check" size={24} color="black" onPress={() => { navigation.navigate('Notification') }} />
                </View>

            </View>
            
        </View>
    )
}
