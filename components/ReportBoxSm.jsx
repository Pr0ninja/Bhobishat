import React from 'react'
import { View, Text,Image } from 'react-native'
import { scale } from '../constants/Dimention'
import { Entypo } from '@expo/vector-icons'; 



export default function ReportBoxSm(props) {
    return (
        <View style={{
            width: scale(980),
            height: scale(369),
            borderRadius: scale(20),
            backgroundColor: "#ffffff",
            shadowColor: "#e9e9e9",
            shadowOffset: {
                width: scale(0),
                height: scale(10)
            },
            shadowRadius: scale(20),
            shadowOpacity: scale(1),
            elevation: 4,
            marginBottom:scale(30),
            flexDirection:'row',
          
        }}>
<View style={{flex:3,paddingLeft:scale(78),paddingTop:scale(10)}}>
    <Text style={{fontSize:scale(55)}}>{props.title}</Text>
    <View style={{marginTop:scale(50)}}>

    </View>
    <Text style={{fontSize:scale(100)}}>{props.sales}</Text>
    <Text style={{fontSize:scale(35),color:'#50c37f'}}>+30% Compaired to last months</Text>

</View>
<View style={{flex:1,alignItems:'flex-end'}}>
    <Entypo name="dots-three-vertical" size={30} color="gray" style={{marginTop:scale(10)}} />
    <Image source={props.image} style={{width:props.width,height:props.height,marginRight:scale(20),marginTop:scale(20)}} />

</View>
        </View>
    )
}
