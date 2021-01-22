import React from 'react'
import { View, Text,ImageBackground } from 'react-native'
import { Input } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { scale } from '../constants/Dimention';
import { TouchableOpacity } from 'react-native';
import HeaderChild from '../components/HeaderChild'


export default function Profile({navigation}) {
    return (
        
           <ImageBackground source={require('../assets/Images/Common/BG.png')} style={{ flex: 1 }}>
           <HeaderChild navigation={navigation} navigationPage={'Profile'} />
            <View >
            <Input
                placeholder='Subhajit Ghaose'
                leftIcon={
                    <View style={{borderWidth:scale(2),borderColor:'black',padding:scale(10)}}>
                    <Text>Name</Text>
                    </View>
                }     
            />
            <Input
                placeholder='25 Years'
                leftIcon={
                    <View style={{borderWidth:scale(2),borderColor:'black',padding:scale(10)}}>
                     <Text>Age</Text>
                    </View>
                }     
            />
            <Input
                placeholder='9856542562'
                leftIcon={
                    <View style={{borderWidth:scale(2),borderColor:'black',padding:scale(10)}}>
                     <Text>Mobile</Text>
                    </View>
                }     
            />
            <Input
                placeholder='City Center,Haldia,721137'
                leftIcon={
                    <View style={{borderWidth:scale(2),borderColor:'black',padding:scale(10)}}>
                     <Text>Address</Text>
                    </View>
                }     
                
            />
            <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={()=>{navigation.replace('Dashboard')}} style={{width:scale(980),height:scale(150),backgroundColor:'#ff6e51',borderRadius:scale(20),alignItems:'center',justifyContent:'center'}} >
                        <Text style={{color:'white',fontSize:scale(60)}}>Update</Text>
                </TouchableOpacity>
            </View>
            </View>
           
        </ImageBackground>
    )
}
