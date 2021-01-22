import React, { useContext } from 'react'
import { View, Text, Image } from 'react-native'
import AddressBlock from '../components/AddressBlock';
import BillingBlock from '../components/BillingBlock';
import OrderSummeryBlock from '../components/OrderSummeryBlock';
import PaymentMethodBox from '../components/PaymentMethodBox';
import QuantityCounter from '../components/QuantityCounter';
import { scale } from '../constants/Dimention';

import Header from '../components/Header'
import { GlobalContext } from '../contextApi/Provider/GlobelProvider';
import HeaderChild from '../components/HeaderChild';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import PaymentBlock from '../components/PaymentBlock';
import { ImageBackground } from 'react-native';

export default function Checkout({ route, navigation }) {


    const { quentity, quentityDispatch } = useContext(GlobalContext)



    return (
        <ImageBackground source={require('../assets/Images/Common/BG.png')} style={{ flex: 1 }}>
            <View style={{flex:1}}>

           
            <HeaderChild navigation={navigation} navigationPage={'Checkout'} />
            <ScrollView>
                <OrderSummeryBlock
                    title={route.params.title}
                    quantity={quentity.quantity}
                    banner={route.params.banner}
                />
                <QuantityCounter />
                <BillingBlock
                    price={route.params.price}
                />
                <AddressBlock />
                <PaymentBlock />

                <View style={{ alignItems: 'center', marginTop: scale(10) }}>
                    <Text style={{ fontSize: scale(50) }} >--OR--</Text>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: scale(10) }}>
                    <PaymentMethodBox image={require('../assets/Images/Checkout/UPI.png')} backgroundColor={'white'} />
                    <PaymentMethodBox image={require('../assets/Images/Checkout/Icon.png')} backgroundColor={'white'} />
                    <PaymentMethodBox image={require('../assets/Images/Checkout/Coins.png')} backgroundColor={'#ff6e51'} />
                </View>
                </ScrollView>
                </View>
                <View style={{ alignItems: 'center', marginTop: scale(70),marginBottom:scale(59) }}>
                    <TouchableOpacity onPress={() => { navigation.replace('Status') }} style={{flexDirection:'row',width: scale(980), height: scale(115), borderRadius: scale(100), backgroundColor: '#ff6761', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../assets/Images/PackageDetails/Leaves.png')} style={{ width: scale(72), height: scale(73), marginRight: scale(20) }} />
                        <Text style={{ fontSize: scale(50), color: 'white' }}>Confirm Order</Text>
                    </TouchableOpacity>

                </View>
                
         
        </ImageBackground>

    )
}
