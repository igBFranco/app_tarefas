import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, TouchableHighlight, Modal, TextInput, Alert } from 'react-native';

export default function App() {

    const image = require('./resources/bg.jpg');

    console.disableYellowBox = true;

    const [tarefas, setarTarefas] = useState([
        {
            id:1,
            tarefa: 'Minha primeira tarefa.'
        },
        {
            id:2,
            tarefa: 'Minha segunda tarefa.'
        },
        {
            id:3,
            tarefa: 'Minha terceira tarefa.'
        }
    ]);

    const [modal, setModal] = useState(true);

    let [fontsLoaded] = useFonts({
      Lato_400Regular,
    });

    if (!fontsLoaded) {
      return <AppLoading />;
    }

    function deletarTarefa(id){
        alert('Tarefa com Id= '+id+' foi deletada com sucesso!');
        let newTarefas = tarefas.filter(function(val){
            return val.id != id;
        });

        setarTarefas(newTarefas);
    }


  return (
      
    <ScrollView style={{flex:1}}>
        <StatusBar hidden />
        <Modal 
            animationType="slide"
            transparent={true}
            visible={modal}
            onRequestClose={()=> {
                Alert.alert("Modal has been closed.");
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TextInput autoFocus={true}></TextInput>
                    <TouchableHighlight 
                    style={{...styles.openButton, backgroundColor:"#2196f3"}}
                    onPress={()=> {
                        setModal(!modal);
                    }}
                    >
                        <Text style={styles.textStyle}>Adicionar Tarefa</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.coverView}>
            <Text style={styles.textHeader}>Lista de Tarefas</Text>
          </View>
        </ImageBackground>


        {
        tarefas.map(function(val){
        return (<View style={styles.tarefaSingle}>
            <View style={{flex:1, width:'100%', padding:10}}>
                <Text>{val.tarefa}</Text>
            </View>
            <View style={{alignItems:'flex-end', flex:1, padding:10}}>
                <TouchableOpacity onPress={()=> deletarTarefa(val.id)}><AntDesign name="minuscircleo" size={30} color="black" /></TouchableOpacity>
            </View>
        </View>);
        })
        }

        <View style={{flex:1, alignItems:'center'}}>
            <TouchableOpacity style={styles.btnAddTarefa} onPress={()=> setModal(true)}><Text style={{textAlign:'center', color:'white', fontSize:18}}><Entypo name="plus" size={20} color="white" /> Nova Tarefa</Text></TouchableOpacity>
        </View>
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
    borderRadius:10,
    borderColor:'black',
    flexDirection:'row',
    padding:10
  },
  centeredView: {
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:'rgba(0,0,0,0.4)'
  },
  modalView: {
      margin: 20,
      backgroundColor:'white',
      borderRadius:20,
      padding:35,
      alignItems:"center",
      shadowColor:"#000",
      shadowOffset: {
          width:0,
          height:2
      },
      shadowOpacity:0.25,
      shadowRadius:3.84,
      elevation:5,
      zIndex:5
  },
  openButton: {
      backgroundColor:"#F194FF",
      borderRadius:20,
      padding:10,
      elevation:2
  },
  textStyle: {
      color:"white",
      fontWeight: "bold",
      textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  btnAddTarefa:{
    width:'90%',
    padding:8,
    backgroundColor:'orange',
    marginTop:20,
    borderRadius:20,
    padding:15,
  }


});
