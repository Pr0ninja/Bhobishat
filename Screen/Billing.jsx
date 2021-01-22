import React from 'react'
import { View, Text, StyleSheet,ImageBackground } from 'react-native'
import { scale } from '../constants/Dimention'
import { List } from 'react-native-paper';
import Header from '../components/Header'
import HeaderChild from '../components/HeaderChild'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';



export default function Billing({navigation}) {

    const data =[
        {
            date:'01 January 2021'
        },
        {
            date:'03 January 2021'
        },
        {
            date:'04 January 2021'
        },
        {
            date:'05 January 2021'
        },
        {
            date:'08 January 2021'
        }, {
            date:'09 January 2021'
        }, {
            date:'11 January 2021'
        }, {
            date:'12 January 2021'
        }, {
            date:'13 January 2021'
        }, {
            date:'14 January 2021'
        }, {
            date:'15 January 2021'
        }, {
            date:'16 January 2021'
        },
    ]



    return (
        <ImageBackground source={require('../assets/Images/Common/BG.png')} style={{ flex: 1 }}>
        <HeaderChild navigation={navigation} navigationPage={'Billing'} />
        <FlatList
        data={data}
        keyExtractor={({item,index})=>item}
        renderItem={({item,index})=>(
<View style={{ alignItems: 'center' }}>
                <List.Section>
                    <List.Accordion
                        title="1. Date : 01 January 2021"
                        titleStyle={{ fontSize: scale(47) }}
                        description="Transition Id : GB65N11582"
                        style={styles.accordionMain}
                    >

                        <View style={styles.accordionBody}>
                            <View >
                                <View style={{ marginTop: scale(36) }}>

                                    <View style={{ flexDirection: 'row',marginLeft:scale(20),marginRight:scale(20) }} >
                                        <View style={{ flex: 1, }}>
                                            <Text style={{ fontSize: scale(35) }}>Order ID</Text>
                                            <Text style={{ fontSize: scale(35) }} >Date</Text>
                                            <Text style={{ fontSize: scale(35) }} >Total Amount</Text>
                                            <Text style={{ fontSize: scale(35) }} >Payment Method</Text>
                                            <Text style={{ fontSize: scale(35) }} >Transition ID</Text>
                                           
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ fontSize: scale(35) }}>:</Text>
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
                                            

                                        </View>

                                    </View>


                                </View>

                            </View>
                            <View style={styles.accordionButtonGroup}>
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
        marginBottom:scale(32.1)
    }
})