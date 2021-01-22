import React from 'react'
import { View, Text, ScrollView, Image, ImageBackground } from 'react-native'
import { scale } from '../constants/Dimention'
import ListWithImage from '../components/ListWithImage';
import Header from '../components/Header'
import { Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderChild from '../components/HeaderChild'
import { product } from '../constants/PurchasesDocs';

export default function Packages({ navigation }) {
    const [products, setProducts] = React.useState([])
    React.useEffect(() => {
        setProducts(product)
    }, [])

    return (
        <ImageBackground source={require('../assets/Images/Common/BG.png')} style={{ flex: 1 }}>
            <HeaderChild navigation={navigation} navigationPage={'Packages'} />
            <ScrollView>
                <TouchableOpacity style={{ margin: scale(20) }} >
                    <Image source={require('../assets/Images/Packages/Banner.png')} style={{ width: scale(1040), height: scale(415), borderRadius: scale(30) }} />
                </TouchableOpacity>
                <View style={{ marginTop: scale(40) }}>
                    {
                        products && products.map((item, index) => (
                            <ListWithImage
                                key={index}
                                title={item.title}
                                subTitle={item.price}
                                image={item.image}
                                obj={
                                    {
                                        title: item.title,
                                        id: item.id,
                                        price:item.price,
                                        banner:item.image
                                    }
                                }
                                navigation={navigation} />
                        ))
                    }

                </View>


            </ScrollView>


        </ImageBackground>
    )
}
