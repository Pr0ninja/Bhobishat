import React from 'react'
import { View, Text } from 'react-native'
import { scale } from '../constants/Dimention'
import { Entypo } from '@expo/vector-icons';

export default function ReportBoxLg(props) {
    return (
        <View style={{
            width: scale(980),
            height: scale(695),
            borderRadius: scale(20),
            backgroundColor: "#ffffff",
            shadowColor: "#e9e9e9",
            shadowOffset: {
                width: scale(0),
                height: scale(10)
            },
            shadowRadius: scale(20),
            shadowOpacity: scale(1),
            elevation: 4
        }}>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 3, marginTop: scale(67), marginLeft: scale(78) }}>
                    <Text style={{fontSize:scale(55)}}>Overview</Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end", marginTop: scale(67), marginLeft: scale(78) }}>
                    <Entypo name="dots-three-vertical" size={30} color="gray" style={{ marginTop: scale(10) }} />
                </View>

            </View>
            <View style={{marginLeft:scale(78),marginTop:scale(50)}}>
                <Text style={{fontSize:scale(45)}}>Total Amount of Seeds : 100/KG</Text>
                <Text style={{fontSize:scale(35),color:'#50c37f'}}>20% Compaired to lash months</Text>
            </View>
            <View style={{marginLeft:scale(78),marginTop:scale(50)}}>
                <Text style={{fontSize:scale(45)}}>Total Waste : 100/KG</Text>
                <Text style={{fontSize:scale(35),color:'#50c37f'}}>20% Compaired to lash months</Text>
            </View>
            <View style={{marginLeft:scale(78),marginTop:scale(50)}}>
                <Text style={{fontSize:scale(45)}}>Approve Quantity % : 90%</Text>
                <Text style={{fontSize:scale(35),color:'#50c37f'}}>20% Compaired to lash months</Text>
            </View>

        </View>
    )
}
