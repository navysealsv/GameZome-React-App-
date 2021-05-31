import * as React from 'react';
import {Text, View, Button, Image, ImageBackground, TextInput,TouchableOpacity } from 'react-native'
import {Audio} from 'expo-av' ;
import 'react-native-gesture-handler';
// import GameScreen from './screens/GameScreen'


export default class HomeScreen extends React.Component{

  goToGameScreen=()=> {
    this.props.navigation.navigate('GameScreen')
  }

  render(){
    return (
      <View style= {{flex:1, backgroundColor:"dodgerblue" }}>
<Text style={{backgroundColor:"yellow", color:"black", textAlign: "center", padding: 10, marginTop:50}} >GAME ZONE🐱‍👤</Text>
 
      <Text style={{fontSize:200, alignSelf:"center"}}>🎮</Text>
      <TextInput
      style = {{marginTop: 20, color: 'white', borderColor: 'white', borderWidth: 3, padding: 7, borderRadius: 10}}
    placeholder = "enter email"
    />
    
    <TextInput
    style = {{marginTop: 20, color: 'white', borderColor: 'white', borderWidth: 3, padding: 7, borderRadius: 10}}
    placeholder = "password"
    secureTextEntry = {true}
    />

<TouchableOpacity
          style={{ padding:12}}
          onPress={() => {
            this.goToGameScreen()
          }}>
          <Text style={{color:"white", textAlign:"center"}}>EXPLORE</Text>
        </TouchableOpacity>

      </View>
    )
  }
}