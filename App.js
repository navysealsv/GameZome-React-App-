import * as React from 'react';
import {Text, View, Button, Image, ImageBackground, TextInput} from 'react-native'
import {Audio} from 'expo-av' ;

class Soundbutton extends React.Component {
Playsound = async () => {

await Audio.Sound.createAsync ({uri: ''}, {shouldPlay : true})

}
render(){
return(

<View style = {{}}>
<Button style = {{}} title = 'EXPLORE' onPress = {this.Playsound}
/>

</View>

)

}
 
}

export default class App extends React.Component{
  render(){
    return (
      <View style= {{flex:1, backgroundColor:"#03045e"}}>
<Text style={{backgroundColor:"#0096c7", color:"white", textAlign: "center", padding: 10}} >GAME ZONE🐱‍👤</Text>
        <Image
          style={{width:200, height:100, marginTop:30, borderRadius:20, alignSelf: "center"}}
          source={require('./assets/download.jfif')}
        />
      
      <TextInput
      style = {{marginTop: 20, color: 'white', borderColor: 'white', borderWidth: 2, padding: 5, borderRadius: 50}}
    placeholder = "enter email"
    />
    
    <TextInput
    style = {{marginTop: 20, color: 'white', borderColor: 'white', borderWidth: 3, padding: 5, borderRadius: 10, backgroundColor: '#0077B6', borderWidth: 2, marginBottom: 25}}
    placeholder = "password"
    secureTextEntry = {true}
    />

   <Soundbutton
   />


      </View>
    )
  }
}