import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { Checkbox } from 'react-native-paper';
import HeaderChild from '../components/HeaderChild';
import { scale } from '../constants/Dimention';

export default function OrderNotification({navigation}) {
    const [checked, setChecked] = React.useState(false);
    return (
        <ImageBackground source={require('../assets/Images/Common/BG.png')} style={{ flex: 1 }}>
           <HeaderChild navigation={navigation} navigationPage={'Notification'} />
            <View style={{ alignItems: "center", marginTop: scale(10) }}>
                <View style={{ width: scale(906), height: scale(120), backgroundColor: "blue", borderRadius: scale(5), backgroundColor: 'white', elevation: scale(5), flexDirection: "row" }}>
                    <View style={{ justifyContent: "center" }}>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ fontSize: scale(40) }}>Order Placed</Text>
                    </View>

                </View>

            </View>

            <View style={{ alignItems: "center", marginTop:scale(10) }}>
                <View style={{ width: scale(906), height: scale(120), backgroundColor: "blue", borderRadius: scale(5), backgroundColor: 'white', elevation: scale(5), flexDirection: "row" }}>
                    <View style={{ justifyContent: "center" }}>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ fontSize: scale(40) }}>Order Dispatched</Text>
                    </View>

                </View>

            </View>

            <View style={{ alignItems: "center", marginTop:scale(10) }}>
                <View style={{ width: scale(906), height: scale(120), backgroundColor: "blue", borderRadius: scale(5), backgroundColor: 'white', elevation: scale(5), flexDirection: "row" }}>
                    <View style={{ justifyContent: "center" }}>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ fontSize: scale(40) }}>Order Delivered</Text>
                    </View>

                </View>

            </View>

            <View style={{ alignItems: "center", marginTop:scale(10) }}>
                <View style={{ width: scale(906), height: scale(120), backgroundColor: "blue", borderRadius: scale(5), backgroundColor: 'white', elevation: scale(5), flexDirection: "row" }}>
                    <View style={{ justifyContent: "center" }}>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ fontSize: scale(40) }}>Customer Care Message</Text>
                    </View>

                </View>

            </View>

            <View style={{ alignItems: "center", marginTop:scale(10) }}>
                <View style={{ width: scale(906), height: scale(120), backgroundColor: "blue", borderRadius: scale(5), backgroundColor: 'white', elevation: scale(5), flexDirection: "row" }}>
                    <View style={{ justifyContent: "center" }}>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ fontSize: scale(40) }}>New Video Uploaded</Text>
                    </View>

                </View>

            </View>


        </ImageBackground>
    )
}
