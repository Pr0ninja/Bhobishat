import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { scale } from '../constants/Dimention'
import { List } from 'react-native-paper';
import HeaderChild from '../components/HeaderChild'
import Header from '../components/Header'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { product } from '../constants/PurchasesDocs';


export default function Purchases({ navigation }) {

    
    return (

        <ImageBackground source={require('../assets/Images/Common/BG.png')} style={{ flex: 1 }}>
            <HeaderChild navigation={navigation} navigationPage={'Purchases'} />
            < FlatList
                data={product}
                keyExtractor={({item})=>item}
                renderItem={({item,index})=>(
                    <View key={index} style={{ alignItems: 'center' }}>
                        <List.Section>
                            <List.Accordion
                                title={`${index+1}. ${item.title}`}
                                titleStyle={{ fontSize: scale(47) }}
                                description="Date : 01 January 2021"
                                style={styles.accordionMain}
                            >

                                <View style={styles.accordionBody}>
                                    <View >
                                        <View style={{ marginTop: scale(36) }}>

                                            <View style={{ flexDirection: 'row', marginLeft: scale(20), marginRight: scale(20) }} >
                                                <View style={{ flex: 1, }}>
                                                    <Text style={{ fontSize: scale(35) }}>Order Date</Text>
                                                    <Text style={{ fontSize: scale(35) }} >Delivery Date</Text>
                                                    <Text style={{ fontSize: scale(35) }} >Quantity</Text>
                                                    <Text style={{ fontSize: scale(35) }} >Rate</Text>
                                                    <Text style={{ fontSize: scale(35) }} >Total Amount</Text>
                                                    <Text style={{ fontSize: scale(35) }} >Payment Method</Text>
                                                </View>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={{ fontSize: scale(35) }}>:</Text>
                                                    <Text style={{ fontSize: scale(35) }} >:</Text>
                                                    <Text style={{ fontSize: scale(35) }} >:</Text>
                                                    <Text style={{ fontSize: scale(35) }} >:</Text>
                                                    <Text style={{ fontSize: scale(35) }} >:</Text>
                                                    <Text style={{ fontSize: scale(35) }} >:</Text>

                                                </View>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={{ fontSize: scale(35) }}>01 January 2021</Text>
                                                    <Text style={{ fontSize: scale(35) }} >03 January 2021</Text>
                                                    <Text style={{ fontSize: scale(35) }} >30 KG</Text>
                                                    <Text style={{ fontSize: scale(35) }} >RS. 100 PER KG</Text>
                                                    <Text style={{ fontSize: scale(35) }} >3000</Text>
                                                    <Text style={{ fontSize: scale(35) }} >CASH ON DELIVERY</Text>

                                                </View>

                                            </View>


                                        </View>

                                    </View>
                                    <View style={styles.accordionButtonGroup}>
                                        <TouchableOpacity onPress={()=>{navigation.navigate('Packages')}} style={styles.accordionButton}>
                                            <Text style={{ color: 'white' }}>Order Again</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={()=>{navigation.navigate('Help')}} style={styles.accordionButton}>
                                            <Text style={{ color: 'white' }}>Help</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={()=>{alert('Comming Soon')}} style={styles.accordionButton}>
                                            <Text style={{ color: 'white' }}>Recipt</Text>
                                        </TouchableOpacity>

                                    </View>


                                </View>

                            </List.Accordion>

                        </List.Section>


                    </View>

                )}
             />
                    

                


        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    accordionMain: {

        width: scale(980),
        height: scale(175),
        borderRadius: scale(20),
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: scale(5),
        borderColor: "#cce5b1"

    },
    accordionBody: {

        width: scale(980),
        height: scale(468),
        borderRadius: scale(20),
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: scale(5),
        borderColor: "#cce5b1"
    },
    accordionButton: {
        width: scale(286), height: scale(65), borderRadius: 100,
        backgroundColor: "#ff6761",
        shadowColor: "rgba(0, 0, 0, 0.09)",
        shadowOffset: {
            width: 0,
            height: 13
        },
        shadowRadius: 31,
        shadowOpacity: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    accordionButtonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: scale(46.8),
        marginTop: scale(26.4),
        marginBottom: scale(32.1)
    }
})