import React from 'react'
import { View, Text, Image } from 'react-native'
import { scale } from '../constants/Dimention'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ListWithImage(props) {
   
    return (
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginBottom: scale(25) }} onPress={()=>{props.navigation.navigate('PackagesProduct',props.obj)}} >
            

                <Image source={props.image} style={{ width: scale(980), height: scale(244) }} />

                <View style={{ width: scale(980), height: scale(244), position: 'absolute', borderColor: "#cce5b1", borderWidth: scale(5), borderRadius: scale(20) }}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View style={{ flex: 4, justifyContent: 'center', paddingLeft: scale(60) }}>
                            <Text style={{ fontSize: scale(54) }}>{props.title}</Text>
                            <Text style={{ fontSize: scale(41) }} >Price : Rs. {props.subTitle}</Text>

                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
                            <AntDesign name="right" size={scale(60)} color="white" />
                        </View>

                    </View>
                </View>



        </TouchableOpacity>
    )
}
