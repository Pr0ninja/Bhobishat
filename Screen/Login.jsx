import AsyncStorage from '@react-native-async-storage/async-storage'
import React,{useContext} from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { scale } from '../constants/Dimention'
import { GlobalContext } from '../contextApi/Provider/GlobelProvider'

export default function Login() {

    const {isLogin,setIsLogin}=useContext(GlobalContext)
   

    const loginHandelar=()=>{
       AsyncStorage.setItem('isLogIn',"true")
       setIsLogin(true)
    }
    return (

        <View style={{ flex: 1,backgroundColor:'white' }}>
            
                

                <View style={{ alignItems: 'center', marginTop: scale(53) }}>
                    <Image source={require('../assets/Images/Common/Welcome.png')} style={{ width: scale(649), height: scale(225) }} />
                </View>
                <View style={{ marginTop: scale(50) }}>
                    <TextInput placeholder="Enter Mobile Number" style={{ height: scale(200), marginHorizontal: scale(105), paddingLeft: scale(57), elevation: scale(5) }} />

                </View>

                <View style={{ marginTop: scale(10) }}>
                    <TextInput placeholder="Enter Password" style={{ height: scale(200), marginHorizontal: scale(105), paddingLeft: scale(57), elevation: scale(5) }} />

                </View>

                <View style={{ alignItems: 'center', marginTop: scale(90) }}>
                    <TouchableOpacity onPress={loginHandelar} style={{ width: scale(879), height: scale(150), backgroundColor: '#ff6e51', borderRadius: scale(10), elevation: scale(2), alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: scale(46), color: 'white' }}>Login</Text>
                    </TouchableOpacity>
                </View>
           

        </View>

    )
}
