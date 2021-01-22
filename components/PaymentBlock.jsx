import React from 'react'
import { View, Text } from 'react-native'
import { scale } from '../constants/Dimention'
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 


export default function PaymentBlock() {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: scale(50), justifyContent: 'space-evenly' }}>
                <View style={{
                    width: scale(827),
                    height: scale(150),
                    borderRadius: scale(15),
                    backgroundColor: "#ffffff",
                    shadowColor: "#e9e9e9",
                    shadowOffset: {
                        width: scale(0),
                        height: scale(10)
                    },
                    shadowRadius: scale(20),
                    shadowOpacity: scale(1),
                    elevation: scale(5), flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly'
                }}>
                    <MaterialIcons name="payments" size={scale(60)} color="#2676e1" />
                    
                    <Text numberOfLines={1}>Address : Mecheda,Purba Medinipur</Text>
                    <AntDesign name="rightcircle" size={24} color="#a2a2a2" />
                </View>
                <View style={{ width: scale(100), height: scale(100), backgroundColor: '#50c37f',alignItems:'center',justifyContent:'center',borderRadius:scale(10) }}>
                    <Text style={{fontSize:scale(100),color:'white'}} >+</Text>
                </View>

            </View>
    )
}
