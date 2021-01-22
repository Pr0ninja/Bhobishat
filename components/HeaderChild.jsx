import React from 'react'
import { View, Text, TouchableOpacity,StatusBar } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { scale } from '../constants/Dimention'
import { AntDesign } from '@expo/vector-icons';


export default function HeaderChild({ navigation, navigationPage }) {
    return (
        <View style={{ height: scale(100), flexDirection: 'row',marginTop:StatusBar.currentHeight||0,paddingTop:scale(50),marginBottom:scale(50)  }}>
            <View style={{ flex: 1, justifyContent: 'center', paddingLeft: scale(30) }}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                    <AntDesign name="arrowleft" size={scale(60)} color="black" />
                </TouchableOpacity>



            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <Text style={{ fontSize: scale(50) }}>{navigationPage}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <FontAwesome name="search" size={24} color="black" />
                <MaterialCommunityIcons name="bell-check" size={24} color="black" />
            </View>

        </View>
    )
}
