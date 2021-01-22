import React from 'react'
import { SectionList } from 'react-native'
import { View, Text,Image } from 'react-native'
import { scale } from '../constants/Dimention';
import HeaderChild from '../components/HeaderChild';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { ImageBackground } from 'react-native';




export default function Notification({navigation}) {
    const DATA = [
        {
          title: "New",
          data: ["Pizza", "Burger", "Risotto"]
        },
        {
          title: "Today",
          data: ["French Fries", "Onion Rings", "Fried Shrimps"]
        },
        {
          title: "Tomorrow",
          data: ["Water", "Coke", "Beer"]
        },
        {
          title: "12 January 2020",
          data: ["Cheese Cake", "Ice Cream"]
        }
      ];

    return (
        <ImageBackground source={require('../assets/Images/Help/BG.png')} style={{flex:1}}>
            <HeaderChild navigation={navigation} navigationPage={'Notification'}  />
            <SectionList 
            sections={DATA}
            keyExtractor={(item,index)=>item+index}
            renderSectionHeader={({section:{title}})=>(
                <View style={{marginLeft:scale(47)}}>
                <Text style={{fontSize:scale(50)}}>{title}</Text>
                </View>
            )}
            renderItem={({item})=>(
                <View style={{alignItems:'center',marginLeft:scale(50)}}>
                    <View style={{flex:1,flexDirection:'row',padding:scale(10),height:scale(264),alignItems:'center'}}>
                        <View style={{}}>
                        <AntDesign name="notification" size={scale(70)} color="#50c37f" />
                        
                        </View>
                        <View style={{flex:1}}>
                        <Text style={{fontSize:scale(40),marginHorizontal:20}} numberOfLines={2}>Your Order Is Delivered To Your Address. Please Let Us Know...</Text>
                        <Text style={{marginHorizontal:20}}>12.30 pm</Text>
                        </View>
                       
                        
                    </View>
                </View>
            )}
            />
            <View>
                
            </View>
        </ImageBackground>
    )
}
