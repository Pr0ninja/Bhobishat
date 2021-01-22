import React,{useContext} from 'react'
import { View, Text,Image } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import { scale } from '../constants/Dimention';
import { GlobalContext } from '../contextApi/Provider/GlobelProvider';


export default function OnBordingUi({navigation}) {
    const {isLogin,setIsLogin} = useContext(GlobalContext)
    return (
        <View style={{flex:1}}>
            <Onboarding
                onDone={()=>{setIsLogin(true)}}
                onSkip={()=>{setIsLogin(true)}}
                pages={[
                    {
                        backgroundColor: '#5BC0EB',
                        image: <Image source={require('../assets/Images/Prelanding/Page-01/02.png')} style={{width:scale(726),height:scale(730)}}  />,
                        title: 'Welcome',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#FDE74C',
                        image: <Image source={require('../assets/Images/Prelanding/Page-02/02.png')} style={{width:scale(726),height:scale(730)}}  />,
                        title: 'What Next ?',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#9BC53D',
                        image: <Image source={require('../assets/Images/Prelanding/Page-03/02.png')} style={{width:scale(726),height:scale(730)}}  />,
                        title: 'Lets Start !',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                ]}
            />
        </View>
    )
}
