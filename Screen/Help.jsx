import React from 'react'
import { View, Text, ImageBackground,Image } from 'react-native'
import { scale } from '../constants/Dimention'
import Header from '../components/Header'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Help({navigation}) {
    return (
        <ImageBackground source={require('../assets/Images/Help/BG.png')} style={{ flex: 1}}>
           <Header navigation={navigation} navigationPage={'Help'} />
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={()=>{navigation.navigate('ChatBox')}} style={{
                  flexDirection:'row',marginTop:scale(20),width: scale(980), height: scale(175), borderRadius: 10, backgroundColor: "#cce5b1", borderStyle: "solid", borderWidth: 3, borderColor: "#50c37f",alignItems:'center',justifyContent:'space-between'
                }}>
                    <Image source={require('../assets/Images/Help/Cultivation.png')} style={{width:scale(70),height:scale(71),marginLeft:scale(50)}} />
                    <View style={{flex:1,marginLeft:scale(50)}}>
                         <Text style={{fontSize:scale(45)}}>Cultivation</Text>
                    </View>
                   

                </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'center' }}>
                <View style={{
                    flexDirection:'row',marginTop:scale(20),width: scale(980), height: scale(175), borderRadius: 10, backgroundColor: "#ffffff", borderStyle: "solid", borderWidth: 3, borderColor: "#50c37f",alignItems:'center'
                }}>
                    <Image source={require('../assets/Images/Help/Harvesting.png')} style={{width:scale(41),height:scale(139),marginLeft:scale(50)}} />
                    <View >
                    <Text style={{fontSize:scale(45),marginLeft:scale(50)}}>Harvesting</Text>

                    </View>
                    
                   
                </View>
            </View>

            <View style={{ alignItems: 'center' }}>
                <View style={{
                    flexDirection:'row',marginTop:scale(20),width: scale(980), height: scale(175), borderRadius: 10, backgroundColor: "#ffffff", borderStyle: "solid", borderWidth: 3, borderColor: "#50c37f",alignItems:'center'
                }}>
                   <Image source={require('../assets/Images/Help/Sales.png')} style={{width:scale(73),height:scale(73),marginLeft:scale(50)}} />
                   
                    <View >
                    <Text style={{fontSize:scale(45),marginLeft:scale(50)}}>Sales</Text>

                    </View>
                    
                   
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={{
                    flexDirection:'row',marginTop:scale(20),width: scale(980), height: scale(175), borderRadius: 10, backgroundColor: "#ffffff", borderStyle: "solid", borderWidth: 3, borderColor: "#50c37f",alignItems:'center'
                }}>
                  <Image source={require('../assets/Images/Help/Payment.png')} style={{width:scale(67),height:scale(59),marginLeft:scale(50)}} />
                   
                    <View >
                    <Text style={{fontSize:scale(45),marginLeft:scale(50)}}>Payment</Text>

                    </View>
                    
                   
                </View>
            </View>
        </ImageBackground>
    )
}
