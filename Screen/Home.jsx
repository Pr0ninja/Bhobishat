import React from 'react'
import { View, StyleSheet, Image, ScrollView, Text, ImageBackground } from 'react-native'
import HomeSlider from '../containers/HomeSlider'
import MenuContainers from '../containers/MenuContainers'
import { scale } from '../constants/Dimention'
import Header from '../components/Header'




export default function Home({ navigation }) {
    return (
        <ImageBackground source={require('../assets/Images/Common/BG.png')} style={{ flex: 1 }} >
            <Header navigation={navigation} navigationPage={'Bhabishya Sathi'} />
            <ScrollView>
                <HomeSlider />

                <MenuContainers navigation={navigation} />

                <View>
                    <Image source={require('../assets/Images/Home/Banner.png')} style={{ width: scale(1080), height: scale(668) }} />
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({

})
