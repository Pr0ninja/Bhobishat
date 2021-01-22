import React from 'react'
import { View, Text,Image } from 'react-native'
import { scale } from '../constants/Dimention'

export default function OrderSummeryBlock(props) {
    return (
        <View style={{ alignItems: 'center' }}>
        <View style={{ justifyContent: 'center', width: scale(980), height: scale(327), borderRadius: scale(10), borderWidth: scale(1), borderColor: '#cce5b1', backgroundColor: 'white', elevation: scale(4) }}>
            <Text style={{ fontSize: scale(50), marginLeft: scale(39) }}>Order Summery</Text>
            <View style={{ flexDirection: 'row', marginLeft: scale(39), marginTop: scale(32) }}>
                <View>
                    <Image source={props.banner} style={{ width: scale(200), height: scale(150), marginRight: scale(30) }} />
                </View>
                <View>
                    <Text>{props.title}</Text>
                    <Text>Quantity : {props.quantity} KG</Text>
                </View>
            </View>
        </View>
    </View>
    )
}
