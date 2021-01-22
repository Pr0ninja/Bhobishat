import React from 'react'
import { View, Text, Image,ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { scale } from '../constants/Dimention'

export default function Status({navigation}) {
    return (
        <ImageBackground source={require('../assets/Images/Common/BG.png')} style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', marginTop: scale(250) }}>
                <Image source={require('../assets/Images/OrderConfirmation/Box.png')} style={{ width: scale(477.4), height: scale(477.4) }} />
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: scale(140) }}>
                <Text style={{ fontSize: scale(80) }}>Order Accepted</Text>
                <Text style={{ fontSize: scale(40), textAlign: 'center' }}>Your Order No. #123-456 {'\n'} has been placed.</Text>
            </View>

            <TouchableOpacity onPress={()=>{navigation.replace('Dashboard')}} style={{ alignItems: 'center', marginTop: scale(141) }}>
                <View style={{
                    width: scale(902),
                    height: scale(115.8),
                    borderRadius: scale(100),
                    backgroundColor: "#ff6761",
                    shadowColor: "rgba(0, 0, 0, 0.09)",
                    shadowOffset: {
                        width: scale(0),
                        height: scale(13)
                    },
                    shadowRadius: scale(31),
                    shadowOpacity: scale(1), alignItems: 'center', justifyContent: 'center'
                }}>
                    <Text style={{ fontSize: scale(60), color: 'white' }}>Continue</Text>

                </View>

            </TouchableOpacity>
        </ImageBackground>
    )
}
