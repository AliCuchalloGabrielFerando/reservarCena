import React from 'react'
import { View, Text,Image } from 'react-native'

export default function CarritoController() {
    return (
        <View>
            <Text>carrito</Text>
            <Image source={ require('../Icons/perfil.png')}
          resizeMode="contain" style={{ 
            width:40,
            height:40,
           }}
          />
          
        </View>
    )
}
