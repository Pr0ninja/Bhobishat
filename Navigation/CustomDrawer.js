import React,{useContext} from 'react'
import { View, Text,StatusBar,Image } from 'react-native'
import { Drawer,Avatar } from 'react-native-paper';
import { scale } from '../constants/Dimention';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalContext } from '../contextApi/Provider/GlobelProvider';
import { ImageBackground } from 'react-native';


export default function CustomDrawer({navigation}) {
    const{isLogin,setIsLogin}=useContext(GlobalContext)
    return (
        <ImageBackground source={require('../assets/Images/Common/BG.png')} style={{ flex: 1}}>
            <DrawerContentScrollView>
                <View style={{ alignItems: "center",marginVertical:scale(30) }}>
                    <Image  source={require('../assets/Images/Common/Logo.png')} style={{width:scale(287),height:scale(403)}} />
                </View>
                <View style={{ marginTop: 15 }}>
                    <Drawer.Section>
                        <Drawer.Item
                            style={{ backgroundColor: "#80bfff" }}
                            icon="home"
                            label="Home"
                            onPress={() => {navigation.navigate('Home') }}
                        />
                        <Drawer.Item
                            style={{ backgroundColor: "#80bfff" }}
                            icon="account-outline"
                            label="Account"
                            onPress={() => {navigation.navigate('Account') }}
                        />
                        <Drawer.Item
                            style={{ backgroundColor: "#80bfff" }}
                            icon="bookmark-outline"
                            label="News"
                            onPress={() => {navigation.navigate('OrderNotification') }}
                        />
                        <Drawer.Item
                            style={{ backgroundColor: "#80bfff" }}
                            icon="account-check-outline"
                            label="Packages"
                            onPress={() => { navigation.navigate('Packages') }}
                        />
                       
                        
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section>
                <Drawer.Item
                    style={{ backgroundColor: "#80bfff" }}
                    icon="logout"
                    label="Logout"
                    onPress={() => {
                        AsyncStorage.removeItem('isLogIn')
                        setIsLogin(false)
                     }}
                />
            </Drawer.Section>
        </ImageBackground>

    )
}
