import React,{useContext} from 'react'
import { View, Text,Image } from 'react-native'
import { Divider } from 'react-native-paper'
import { scale } from '../constants/Dimention'
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { GlobalContext } from '../contextApi/Provider/GlobelProvider';

export default function BillingBlock(props) {
    const {quentity}=useContext(GlobalContext)
    return (
        <View style={{ alignItems: 'center', marginTop: scale(42) }} >
                <View style={{ width: scale(980), height: scale(396), borderRadius: scale(25), backgroundColor: "#ffffff", elevation: scale(5), borderColor: "#cce5b1", borderWidth: scale(2) }}>
                    <Text style={{ fontSize: scale(50), marginLeft: scale(50), marginTop: scale(27) }}>Totals</Text>
                    <Divider />
                    <View style={{marginHorizontal:scale(25)}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: scale(20), marginTop: scale(27.8) }}>
                        <View style={{ flexDirection: 'row' }} >
                            <Image source={require('../assets/Images/Checkout/Money.png')} style={{ width: scale(60), height: '100%' }} />
                            <Text style={{ marginLeft: scale(28) }}>Sub Total</Text>
                        </View>
                        <View>
                            <Text >₹{props.price}</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: scale(20), marginTop: scale(20), marginBottom: scale(27.8) }}>
                        <View style={{ flexDirection: 'row' }} >
                            <Image source={require('../assets/Images/Checkout/Delivery.png')} style={{ width: scale(70), height: '100%' }} />
                            <Text style={{ marginLeft: scale(28) }}>Shipping</Text>
                        </View>
                        <View>
                            <Text>₹50</Text>
                        </View>

                    </View>
                    </View>
                    <Divider />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: scale(55) }}>
                        <Text style={{ fontSize: scale(47) }}>Total</Text>
                        <Text style={{ fontSize: scale(47) }}>₹{props.price*quentity.quantity+50}</Text>
                    </View>


                </View>


            </View>
    )
}
