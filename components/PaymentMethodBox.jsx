import React from 'react'
import { View, Text,Image } from 'react-native'
import { scale } from '../constants/Dimention'

export default function PaymentMethodBox(props) {
    return (
        <View style={{ alignItems: 'center' }} >
                    <Text style={{fontSize:scale(30)}}>{props.title}</Text>
                    <View style={{
                        width: scale(290),
                        height: scale(147),
                        borderRadius: scale(20),
                        backgroundColor: props.backgroundColor,
                        shadowColor: "#e9e9e9",
                        shadowOffset: {
                            width: scale(0),
                            height: scale(10)
                        },
                        shadowRadius: scale(20),
                        shadowOpacity: scale(1),
                        elevation: scale(5),
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image source={props.image} style={{ width: scale(140.5), height: scale(35.3) }} />
                    </View>

                </View>
    )
}
