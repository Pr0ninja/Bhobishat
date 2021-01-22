import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal, TouchableHighlight, ScrollView,Alert,ImageBackground } from 'react-native'
import { scale } from '../constants/Dimention'
import { List } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import HeaderChild from '../components/HeaderChild'
import { FlatList } from 'react-native-gesture-handler';
import { product } from '../constants/PurchasesDocs';



export default function Sale({navigation}) {

    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = React.useState('');


    return (
        <ImageBackground source={require('../assets/Images/Common/BG.png')} style={{ flex: 1 }}>
         <HeaderChild navigation={navigation} navigationPage={'Sale'} />
            {/* modal section */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}


            >
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.8)' }}>
                    <View style={{ height: scale(10), alignItems: 'flex-end', marginTop: scale(20) }}>
                        <TouchableOpacity style={styles.floatButtonModal} onPress={() => { setModalVisible(false) }} >
                            <Text style={{ fontSize: scale(80), color: 'white' }}>X</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                        <View style={{ width: scale(980), height: scale(1450), backgroundColor: "#ffffff", borderRadius: scale(20) }} >
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: scale(50), marginTop: scale(65) }}>New Sale</Text>
                            </View>
                            <View style={{ marginTop: scale(60) }}>
                                <TextInput
                                    label="Product Name"
                                    value={text}
                                    style={{ backgroundColor: 'white', marginLeft: scale(66), marginRight: scale(66) }}
                                    onChangeText={text => setText(text)}
                                />

                                <TextInput
                                    label="Quantity"
                                    value={text}
                                    style={{ backgroundColor: 'white', marginLeft: scale(66), marginRight: scale(66) }}
                                    onChangeText={text => setText(text)}
                                />

                                <TextInput
                                    label="Rate"
                                    value={text}
                                    style={{ backgroundColor: 'white', marginLeft: scale(66), marginRight: scale(66) }}
                                    onChangeText={text => setText(text)}
                                />

                                <TextInput
                                    label="Delivery Center"
                                    value={text}
                                    style={{ backgroundColor: 'white', marginLeft: scale(66), marginRight: scale(66) }}
                                    onChangeText={text => setText(text)}
                                />
                                <View style={{ flexDirection: 'row', height: scale(140) }} >
                                    <View style={{ flex: 1 }}>
                                        <TextInput
                                            label="Est. Delivery Date"
                                            value={text}
                                            style={{ backgroundColor: 'white', marginLeft: scale(66), marginRight: scale(66) }}
                                            onChangeText={text => setText(text)}
                                        />
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <TextInput
                                            label="Total Value"
                                            value={text}
                                            style={{ backgroundColor: 'white', marginLeft: scale(66), marginRight: scale(66) }}
                                            onChangeText={text => setText(text)}
                                        />
                                    </View>

                                </View>


                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center', height: scale(380) }}>
                                <TouchableOpacity style={{ width: scale(504), height: scale(130), backgroundColor: '#50c37f', marginVertical: scale(99.3), borderRadius: scale(10), alignItems: 'center', justifyContent: 'center' }} >
                                    <Text style={{ color: 'white', fontSize: scale(50) }}>Request Sale</Text>

                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>



                </View>
            </Modal>

            {/* body section */}
            <FlatList
            data={product}
            renderItem={({item,index})=>(
                <View style={{ alignItems: 'center' }}>
                <List.Section>
                    <List.Accordion
                        title= {`${index+1}. ${item.title}`}
                        titleStyle={{ fontSize: scale(47) }}
                        description="Date : 01 January 2021"
                        style={styles.accordionMain}
                    >

                        <View style={styles.accordionBody}>
                            <View >
                                <View style={{ marginTop: scale(36) }}>

                                    <View style={{ flexDirection: 'row', marginLeft: scale(20), marginRight: scale(20) }} >
                                        <View style={{ flex: 2, }}>
                                            <Text style={{ fontSize: scale(35) }}>Status</Text>
                                            <Text style={{ fontSize: scale(35) }}>Request Date</Text>
                                            <Text style={{ fontSize: scale(35) }} >Delivery Date</Text>
                                            <Text style={{ fontSize: scale(35) }} >Request Quantity</Text>
                                            <Text style={{ fontSize: scale(35) }} >Approved Quantity</Text>
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
                                            <Text style={{ fontSize: scale(35) }} >:</Text>
                                            <Text style={{ fontSize: scale(35) }} >:</Text>

                                        </View>
                                        <View style={{ flex: 2 }}>
                                            <Text style={{ fontSize: scale(35), color: 'green' }}>Approved</Text>
                                            <Text style={{ fontSize: scale(35) }} >03 January 2021</Text>
                                            <Text style={{ fontSize: scale(35) }} >30 KG</Text>
                                            <Text style={{ fontSize: scale(35) }} >RS. 100 PER KG</Text>
                                            <Text style={{ fontSize: scale(35) }} >3000</Text>
                                            <Text style={{ fontSize: scale(35) }} >CASH ON DELIVERY</Text>
                                            <Text style={{ fontSize: scale(35) }} >3000</Text>
                                            <Text style={{ fontSize: scale(35) }} >CASH ON DELIVERY</Text>

                                        </View>

                                    </View>


                                </View>

                            </View>
                            <View style={styles.accordionButtonGroup}>
                                <TouchableOpacity onPress={()=>{setModalVisible(true)}} style={styles.accordionButton}>
                                    <Text style={{ color: 'white' }}>Sell Again</Text>
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
            
            <TouchableOpacity style={styles.floatButton} onPress={() => { setModalVisible(true) }} >
                <Text style={{ fontSize: scale(100), color: 'white' }}>+</Text>
            </TouchableOpacity>
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
        height: scale(600),
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
    },
    floatButton: {
        width: scale(125),
        height: scale(125),
        backgroundColor: '#ff6e51',
        position: 'absolute',
        bottom: scale(200),
        right: scale(70),
        borderRadius: scale(75),
        alignItems: 'center',
        justifyContent: 'center'
    },
    floatButtonModal: {
        width: scale(125),
        height: scale(125),
        borderRadius: scale(75),


    }
})