import React,{useContext} from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import { scale } from '../constants/Dimention'
import { GlobalContext } from '../contextApi/Provider/GlobelProvider'

export default function QuantityCounter() {

    const {quentity,quentityDispatch}=useContext(GlobalContext)
    return (
        <View style={{ marginTop: scale(57), flexDirection: 'row' }}>
        <View style={{ marginLeft: scale(153) }}>
            <Text style={{ fontSize: scale(57) }}>Quantity In KG :</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: scale(20) }}>
            <TouchableOpacity onPress={()=>{quentityDispatch({type:'Sub'})}} style={{ width: scale(98), height: scale(90), backgroundColor: "rgba(0, 0, 0, 0.06)",alignItems: 'center', justifyContent: 'center', margin: scale(10) }}>
                <Text style={{ fontSize: scale(70) }}>-</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: scale(70), margin: scale(10) }}>{quentity.quantity}</Text>
            <TouchableOpacity onPress={()=>{quentityDispatch({type:'Add'})}} style={{ width: scale(98), height: scale(90), backgroundColor: "rgba(0, 0, 0, 0.06)",alignItems: 'center', justifyContent: 'center', margin: scale(10) }}>
                <Text style={{ fontSize: scale(70) }}>+</Text>
            </TouchableOpacity>
        </View>

    </View>
    )
}
