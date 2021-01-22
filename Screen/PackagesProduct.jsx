import React, { useContext } from 'react'
import { View, Text, Image,ImageBackground } from 'react-native'
import { scale } from '../constants/Dimention'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import HeaderChild from '../components/HeaderChild'
import { GlobalContext } from '../contextApi/Provider/GlobelProvider';

export default function PackagesProduct({ navigation,route }) {
    const {quentity,quentityDispatch}=useContext(GlobalContext)
   
    return (
        <ImageBackground source={require('../assets/Images/Common/BG.png')} style={{ flex: 1 }}>
            <View style={{flex:1}}>

          
        <HeaderChild navigation={navigation} navigationPage={'Product'} />
           
            <View style={{ alignItems: 'center' }}>
                <Image source={route.params.banner} style={{ height: scale(415) }} />
            </View>

            <View style={{ alignItems: 'center' }} >
                <View style={{ width: scale(980), height: scale(240), backgroundColor: "white", borderRadius: scale(10), elevation: scale(5), marginTop: scale(30) }}>
                    <View style={{ marginLeft: scale(37), marginTop: scale(37) }}>
                        <Text style={{ fontSize: scale(55) }}>{route.params.title}</Text>
                        <Text style={{ fontSize: scale(50) }}>₹{route.params.price} Per KG</Text>
                    </View>

                </View>
            </View>


            <View style={{ alignItems: 'center' }} >
                <View style={{ width: scale(980), height: scale(153), backgroundColor: "white", borderRadius: scale(10), elevation: scale(5), marginTop: scale(30), flexDirection: "row", alignItems: "center", paddingLeft: scale(50) }}>
                    <View>
                        <AntDesign name="tagso" size={scale(100)} color="green" />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: scale(45) }}>Minimum Order : 10KG</Text>
                    </View>


                </View>
            </View>

            <View style={{ alignItems: 'center' }} >
                <View style={{ width: scale(980), height: scale(471), backgroundColor: "white", borderRadius: scale(10), elevation: scale(5), marginTop: scale(30), flexDirection: "row" }}>
                    <View>
                        <Text style={{ fontSize: scale(60), marginLeft: scale(39) }}>Harvest Instructions</Text>
                        <Text style={{ marginLeft: scale(57) }}>
                            Best Season To Cultivate Is Summer.
                            Requires High Humidity (55% - 70%) & Moderate
                            Temperature (20 - 30 Degree Celcius).
                            Time Required To Full Growth : 6 to 8 Months.
                            In Hilly Areas Above 900m.
                            Major States : Orissa, Karnataka, Maharashtra, Andhra
                            Pradesh, Madhya Pradesh, West Bengal.
                       </Text>
                    </View>

                </View>
            </View>

            <View style={{ marginTop: scale(57), flexDirection: 'row' }}>
                <View style={{ marginLeft: scale(153) }}>
                    <Text style={{ fontSize: scale(57) }}>Quantity In (KG) :</Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: scale(20) }}>
                    <TouchableOpacity onPress={()=>{quentityDispatch({type:'Sub'})}} style={{ width: scale(98), height: scale(90), backgroundColor: "rgba(0, 0, 0, 0.06)", alignItems: 'center', justifyContent: 'center', margin: scale(10) }}>
                        <Text style={{ fontSize: scale(70) }}>-</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: scale(70), margin: scale(10) }}>{quentity.quantity}</Text>
                    <TouchableOpacity onPress={()=>{quentityDispatch({type:'Add'})}} style={{ width: scale(98), height: scale(90), backgroundColor: "rgba(0, 0, 0, 0.06)", alignItems: 'center', justifyContent: 'center', margin: scale(10) }}>
                        <Text style={{ fontSize: scale(70) }}>+</Text>
                    </TouchableOpacity>
                </View>

            </View>
            </View>


            <View style={{ alignItems: 'center', marginTop: scale(59),marginBottom:scale(59) }}>
                <TouchableOpacity onPress={() => { navigation.navigate('Checkout',route.params) }} style={{flexDirection:'row',width: scale(980), height: scale(115), backgroundColor: '#ff6761', borderRadius: scale(100), justifyContent: 'center', alignItems: 'center' }} >
                    <Image source={require('../assets/Images/PackageDetails/Leaves.png')} style={{width:scale(72),height:scale(73),marginRight:scale(20)}} />
                    <Text style={{ fontSize: scale(50), color: 'white' }}>Place Order</Text></TouchableOpacity>
            </View>


        </ImageBackground>
    )
}
