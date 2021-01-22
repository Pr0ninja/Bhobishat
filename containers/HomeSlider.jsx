import React from 'react'
import { View, Text, Image } from 'react-native'
import { scale } from '../constants/Dimention'
import Swiper from 'react-native-swiper'



export default function HomeSlider() {
    return (
        <Swiper style={{ height: scale(668),marginTop:scale(-25)}} autoplay={true}  >
            <View style={{alignItems:'center'}}>
                <Image source={require('../assets/Images/Home/Slider-02.png')} style={{  height: scale(668),resizeMode:'contain' }} />
            </View>
            <View style={{alignItems:'center'}}>
                <Image source={require('../assets/Images/Home/Slider-02.png')} style={{  height: scale(668),resizeMode:'contain' }} />
            </View>
            <View style={{alignItems:'center'}}>
                <Image source={require('../assets/Images/Home/Slider-02.png')} style={{ height: scale(668),resizeMode:'contain'}} />
            </View>
        </Swiper>
    )
}
