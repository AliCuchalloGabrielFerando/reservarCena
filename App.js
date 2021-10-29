//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack'

import firebase from './database/firebase'

import Tab from './Controllers/TabController'

//const stack = createNativeStackNavigator()

const guardar = async () => {
  await firebase.db.collection('users').add({
    name: 'ali',
    apellido: 'ohhh'
  })
}

/*function mystack(){
  return (


      <View>
        <Button onPress={guardar}>
          Clicj
        </Button>
      </View>
  )
}*/


export default function App() {
  console.disableYellowBox = true

  return (
    <Tab/>

  );
}


/*<NavigationContainer>

   </NavigationContainer>*/
/*  <View>
    <Button title="presione" onPress={() => guardar()}>

    </Button>


  </View>*/