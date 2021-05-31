import * as React from 'react';
import {Text, View, Button, Image, ImageBackground, TextInput, StyleSheet} from 'react-native'
import {Audio} from 'expo-av' ;
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import GameScreen from './screens/GameScreen';
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component{
  render(){
    return (
  
 
        <AppContainer/>

    )
  }

  
}
const Navigation = createSwitchNavigator({ 
  HomeScreen:HomeScreen,
  GameScreen:GameScreen,
 
  
  
}
)

const AppContainer = createAppContainer(Navigation)