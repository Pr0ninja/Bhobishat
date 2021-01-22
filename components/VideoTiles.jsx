import React from 'react'
import { View, Text,Image } from 'react-native'
import { scale } from '../constants/Dimention'

export default function VideoTiles(props) {
    return (
        <View style={{ flexDirection: "row",marginTop:scale(30),marginHorizontal:scale(50) }} >
                <View style={{marginLeft:scale(23) }}>
                    <Image source={props.image} style={{ width: scale(390), height: scale(250),borderRadius:scale(20) }} />
                    <View style={{borderBottomRightRadius:scale(20), width:scale(132),height:scale(72),borderColor:'black',borderWidth:1,alignItems:'center',justifyContent:'center',position:'absolute',bottom:0,right:0}}>
                            <Text style={{color:'white'}}>10:00</Text>
                    </View>
                </View>

                <View style={{ flex: 1,justifyContent:'space-between',marginLeft:scale(23) }}>
                    <Text numberOfLines={1} style={{ fontSize: scale(40) }}>{props.title} </Text>
                    <Text style={{ fontSize: scale(35) }}>{props.date}</Text>
                </View>
            </View>
    )
}
