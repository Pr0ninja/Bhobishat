import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import HeaderChild from '../components/HeaderChild'
import OwnMassege from '../components/OwnMassege'
import OrthersMassege from '../components/OrthersMassege'
import { scale } from '../constants/Dimention'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 



export default function ChatBox({navigation}) {
    return (
        <ImageBackground source={require('../assets/Images/Help/BG.png')} style={{ flex: 1 }} >
            <HeaderChild navigationPage={'Chat'} navigation={navigation} />
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: scale(40) }}>NOVEMBER 27, 2019</Text>
                </View>
                <OwnMassege time={'12.30pm'} content={`Hello, I'm Beginning The Seeding Process Today.`} />
                <OrthersMassege time={'12.35pm'} content={`Hello Subhajit, Is Everything Going Okay with Your Farming Process? Please Let Us Know How We Can Assist You.`} />
                <OwnMassege time={'12.40pm'} content={`I've Just Completed The 1st Step,Waiting For Sprouts.`} />
                <OrthersMassege time={'12.40pm'} content={`OK, Please Keep Us Updated With The Whole Process & Let Us Know If Any Help Is Required.`} />
                <OwnMassege time={'12.40pm'} content={`I've Just Completed The 1st Step,Waiting For Sprouts.`} />
                <OrthersMassege time={'12.40pm'} content={`OK, Please Keep Us Updated With The Whole Process & Let Us Know If Any Help Is Required.`} />
            </ScrollView>
            <View style={{ flexDirection: 'row', marginBottom: scale(20), marginTop: scale(20),justifyContent:'space-evenly' }}>
                <View style={{ flexDirection: 'row', width: scale(936), height: scale(120), backgroundColor: 'white', borderRadius: scale(100), alignItems: 'center',paddingHorizontal:scale(20) }}>
                    <AntDesign name="smileo" size={scale(60)} color="black" />
                    <TextInput placeholder="Type A Message" style={{ flex: 1,marginLeft:scale(30) }} />
                    <AntDesign name="paperclip" size={scale(60)} color="black" style={{marginLeft:scale(15)}} />
                    <AntDesign name="camera" size={scale(60)} color="black" style={{marginLeft:scale(30),marginRight:scale(15)}} />
                </View>
                <View style={{alignItems:'center',justifyContent:'center'}} >
                    <View style={{width:scale(120),height:scale(120),backgroundColor:'#50c37f',alignItems:'center',justifyContent:'center',borderRadius:scale(60)}}>
                    <Ionicons name="send-outline" size={scale(60)} color="white" />
                    </View>
                
                </View>

            </View>

        </ImageBackground>
    )
}
