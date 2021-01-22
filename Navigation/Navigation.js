import React, { useEffect, useContext } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Home from '../Screen/Home'
import Account from '../Screen/Account'
import Help from '../Screen/Help'
import Video from '../Screen/Video'
import Packages from '../Screen/Packages'
import Purchases from '../Screen/Purchases'
import Sale from '../Screen/Sale'
import Payments from '../Screen/Payments'
import Report from '../Screen/Report'
import Checkout from '../Screen/Checkout'
import Register from '../Screen/Register'

import Profile from '../Screen/Profile'
import OrderNotification from '../Screen/OrderNotification'
import PackagesProduct from '../Screen/PackagesProduct'
import Status from '../Screen/Status'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const AuthTab = createMaterialTopTabNavigator();

const MyTabs = () => {
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <View style={{ marginTop: scale(130), justifyContent: 'center', alignItems: 'center', marginBottom: scale(100) }}>
                <Image source={require('../assets/Images/Common/Logo.png')} style={{ width: scale(287), height: scale(403) }} />
            </View>

            <AuthTab.Navigator tabBarOptions={{
               indicatorStyle:{borderWidth:scale(5)},
               labelStyle: { fontSize: scale(35) },
               style: { backgroundColor: 'white' },
            }} >
                <AuthTab.Screen name="Login" component={Login} />
                <AuthTab.Screen name="Register" component={Register} />
            </AuthTab.Navigator>
        </View>
    );
}





import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OnBordingUi from '../containers/OnBordingUi'
import CustomDrawer from './CustomDrawer'
import Login from '../Screen/Login'
import AsyncStorage from '@react-native-async-storage/async-storage'
import GlobelProvider, { GlobalContext } from '../contextApi/Provider/GlobelProvider'
import ChatBox from '../Screen/ChatBox'
import { scale } from '../constants/Dimention'
import Notification from '../Screen/Notification'
import Billing from '../Screen/Billing'




const Tab = createMaterialBottomTabNavigator();

const DashboardTab = () => {


    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#3399ff"
            barStyle={{ backgroundColor: 'white' }}

        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Video"
                component={Video}
                options={{
                    tabBarLabel: 'Video',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="image-minus" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Help"
                component={Help}
                options={{
                    tabBarLabel: 'Help',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="human-child" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}




const Drawer = createDrawerNavigator()

const DashboardDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Main"
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name="Main" component={DashboardTab} />
        </Drawer.Navigator>
    )
}



const Stack = createStackNavigator()

export default function Navigation() {





    const { isLogin, setIsLogin } = useContext(GlobalContext)
    const [isFirstTime, setIsFirstTime] = React.useState(null)

    useEffect(() => {
        AsyncStorage.getItem('isFirstTime').then((res) => {
            if (res == null) {
                AsyncStorage.setItem('isFirstTime', "true")
                setIsFirstTime(true)

            } else {
                setIsFirstTime(false)
                AsyncStorage.getItem('isLogIn').then((res) => {
                    if (res == null) {
                        setIsLogin(false)
                    } else {
                        setIsLogin(true)
                    }
                })

            }
        })



    }, [isLogin])

    if (isFirstTime == null) {
        return null;

    } else if (isFirstTime === true) {
        return (<OnBordingUi />)

    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    {
                        isLogin ? (
                            <>
                                <Stack.Screen name="Dashboard" component={DashboardDrawer} options={{ headerShown: false }} />
                                <Stack.Screen name="Packages" component={Packages} options={{ headerShown: false }} />
                                <Stack.Screen name="Purchases" component={Purchases} options={{ headerShown: false }} />
                                <Stack.Screen name="Sale" component={Sale} options={{ headerShown: false }} />
                                <Stack.Screen name="Payments" component={Payments} options={{ headerShown: false }} />
                                <Stack.Screen name="Report" component={Report} options={{ headerShown: false }} />
                                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                                <Stack.Screen name="OrderNotification" component={OrderNotification} options={{ headerShown: false }} />
                                <Stack.Screen name="PackagesProduct" component={PackagesProduct} options={{ headerShown: false }} />
                                <Stack.Screen name="Status" component={Status} options={{ headerShown: false }} />
                                <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
                                <Stack.Screen name="ChatBox" component={ChatBox} options={{ headerShown: false }} />
                                <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
                                <Stack.Screen name="Billing" component={Billing} options={{ headerShown: false }} />
                            </>
                        ) : (
                                <>
                                    <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
                                </>
                            )
                    }



                </Stack.Navigator>
            </NavigationContainer>
        )
    }




}
