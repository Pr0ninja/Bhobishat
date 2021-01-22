import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../components/Header'
import VideoTiles from '../components/VideoTiles'
import { scale } from '../constants/Dimention'

export default function Video({navigation}) {
    return (
        <ImageBackground source={require('../assets/Images/Common/BG.png')} style={{ flex: 1 }}>
           
            
            <Header navigation={navigation} navigationPage={'Video'} />
            <ScrollView>
            <View style={{ alignItems: 'center' }} >
                <Image source={require('../assets/Images/Video/Banner.png')} style={{ width: scale(1040), height: scale(415) }} />
            </View>


            <VideoTiles image={require('../assets/Images/Video/Image-01.png')} title={'How To Harvest Best Wester Mashroom'} date="1 months" />
            <VideoTiles image={require('../assets/Images/Video/Image-02.png')} title={'How To Harvest Best Wester Mashroom'} date="2 months" />
            <VideoTiles image={require('../assets/Images/Video/Image-03.png')} title={'How To Harvest Best Wester Mashroom'} date="2 months" />
            <VideoTiles image={require('../assets/Images/Video/Image-04.png')} title={'How To Harvest Best Wester Mashroom'} date="2 months" />
            <VideoTiles image={require('../assets/Images/Video/Image-05.png')} title={'How To Harvest Best Wester Mashroom'} date="3 months" />
            <VideoTiles image={require('../assets/Images/Video/Image-06.png')} title={'How To Harvest Best Wester Mashroom'} date="3 months" />
            <VideoTiles image={require('../assets/Images/Video/Image-06.png')} title={'How To Harvest Best Wester Mashroom'} date="3 months"/>
            <VideoTiles image={require('../assets/Images/Video/Image-06.png')} title={'How To Harvest Best Wester Mashroom'} date="3 months"/>

            
            </ScrollView>
        </ImageBackground>
    )
}
