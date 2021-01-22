import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import ReportBoxLg from '../components/ReportBoxLg'
import ReportBoxSm from '../components/ReportBoxSm'
import { scale } from '../constants/Dimention'
import Header from '../components/Header'
import HeaderChild from '../components/HeaderChild'

export default function Report({ navigation }) {
    return (
        <ImageBackground source={require('../assets/Images/Common/BG.png')} style={{ flex: 1 }}>
            <HeaderChild navigation={navigation} navigationPage={'Report'} />

            <View style={{ alignItems: 'center' }}>
                <ReportBoxSm title={'Total Hearvest'} sales={'500 KG'} image={require('../assets/Images/Report/Harvesting.png')} width={scale(124)} height={scale(109)} />
                <ReportBoxSm title={'Total Seals'} sales={'20,000'} image={require('../assets/Images/Report/Payment.png')} width={scale(124)} height={scale(109)} />
                <ReportBoxLg />

            </View>

        </ImageBackground>
    )
}

