import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

    const image = require('./resources/bg.jpg');


  return (
    <View style={{flex:1}}>
      
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.coverView}>
            <Text style={styles.textHeader}>Lista de Tarefas</Text>
          </View>
        </ImageBackground>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width:'100%',
    height:100,
    resizeMode: "cover"
  },
  coverView:{
    width:'100%',
    height:100,
    backgroundColor:'rgba(0,0,0,0.4)'
  },
  textHeader:{
    textAlign:'center',
    color:'white',
    fontSize:20,
    marginTop:50,
  }

});
