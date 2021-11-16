import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {

    const image = require('./resources/bg.jpg');

    let [fontsLoaded] = useFonts({
      Lato_400Regular,
    });

    if (!fontsLoaded) {
      return <AppLoading />;
    }


  return (
    <ScrollView style={{flex:1}}>
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.coverView}>
            <Text style={styles.textHeader}>Lista de Tarefas</Text>
          </View>
        </ImageBackground>


        <View style={styles.tarefaSingle}>
            <View style={{flex:1, width:'100%', padding:10}}>
                <Text>Minha Terefa Número 1 ...........</Text>
            </View>
            <View style={{alignItems:'flex-end', flex:1, padding:10}}>
                <TouchableOpacity><AntDesign name="minuscircleo" size={30} color="black" /></TouchableOpacity>
            </View>
        </View>

        <View style={styles.tarefaSingle}>
            <View style={{flex:1, width:'100%', padding:10}}>
                <Text>Minha Terefa Número 1 ...........</Text>
            </View>
            <View style={{alignItems:'flex-end', flex:1, padding:10}}>
                <TouchableOpacity><AntDesign name="minuscircleo" size={30} color="black" /></TouchableOpacity>
            </View>
        </View>

        <View style={styles.tarefaSingle}>
            <View style={{flex:1, width:'100%', padding:10}}>
                <Text>Minha Terefa Número 1 ...........</Text>
            </View>
            <View style={{alignItems:'flex-end', flex:1, padding:10}}>
                <TouchableOpacity><AntDesign name="minuscircleo" size={30} color="black" /></TouchableOpacity>
            </View>
        </View>

        <View style={styles.tarefaSingle}>
            <View style={{flex:1, width:'100%', padding:10}}>
                <Text>Minha Terefa Número 1 ...........</Text>
            </View>
            <View style={{alignItems:'flex-end', flex:1, padding:10}}>
                <TouchableOpacity><AntDesign name="minuscircleo" size={30} color="black" /></TouchableOpacity>
            </View>
        </View>

        <View style={styles.tarefaSingle}>
            <View style={{flex:1, width:'100%', padding:10}}>
                <Text>Minha Terefa Número 1 ...........</Text>
            </View>
            <View style={{alignItems:'flex-end', flex:1, padding:10}}>
                <TouchableOpacity><AntDesign name="minuscircleo" size={30} color="black" /></TouchableOpacity>
            </View>
        </View>

        <View style={styles.tarefaSingle}>
            <View style={{flex:1, width:'100%', padding:10}}>
                <Text>Minha Terefa Número 1 ...........</Text>
            </View>
            <View style={{alignItems:'flex-end', flex:1, padding:10}}>
                <TouchableOpacity><AntDesign name="minuscircleo" size={30} color="black" /></TouchableOpacity>
            </View>
        </View>

        <View style={styles.tarefaSingle}>
            <View style={{flex:1, width:'100%', padding:10}}>
                <Text>Minha Terefa Número 1 ...........</Text>
            </View>
            <View style={{alignItems:'flex-end', flex:1, padding:10}}>
                <TouchableOpacity><AntDesign name="minuscircleo" size={30} color="black" /></TouchableOpacity>
            </View>
        </View>

        <View style={styles.tarefaSingle}>
            <View style={{flex:1, width:'100%', padding:10}}>
                <Text>Minha Terefa Número 1 ...........</Text>
            </View>
            <View style={{alignItems:'flex-end', flex:1, padding:10}}>
                <TouchableOpacity><AntDesign name="minuscircleo" size={30} color="black" /></TouchableOpacity>
            </View>
        </View>

        <View style={styles.tarefaSingle}>
            <View style={{flex:1, width:'100%', padding:10}}>
                <Text>Minha Terefa Número 1 ...........</Text>
            </View>
            <View style={{alignItems:'flex-end', flex:1, padding:10}}>
                <TouchableOpacity><AntDesign name="minuscircleo" size={30} color="black" /></TouchableOpacity>
            </View>
        </View>

      <StatusBar style="auto" />
    </ScrollView>
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
    fontSize:25,
    marginTop:50,
    fontFamily:'Lato_400Regular'
  },
  tarefaSingle :{
    marginTop:30,
    width:'100%',
    borderBottomWidth:1,
    borderBottomColor:'black',
    flexDirection:'row',
    paddingBottom:10

  }

});
