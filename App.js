import React from 'react'
import 'react-native-gesture-handler';
import { ImageBackground } from 'react-native'

import OnBordingUi from './containers/OnBordingUi';
import Navigation from './Navigation/Navigation';
import GlobelProvider from './contextApi/Provider/GlobelProvider';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <GlobelProvider>
      <Navigation />
    </GlobelProvider>


  )
}
