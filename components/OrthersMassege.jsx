import React from 'react'
import { View, Text } from 'react-native'
import { scale } from '../constants/Dimention'

export default function OrthersMassege(props) {
    return (
        <View style={{ alignItems: 'flex-start', marginLeft: scale(30), marginTop: scale(30) }}>
            <View style={{ width: scale(720), paddingVertical: scale(50), paddingHorizontal: scale(15), backgroundColor: 'white', borderRadius: scale(15) }}>
                <Text style={{ fontSize: scale(36) }}>{props.content}</Text>
                <View style={{alignItems:'flex-end',marginRight:scale(5)}}>
                    <Text>{props.time}</Text>
                </View>
            </View>
        </View>
    )
}
