import React from 'react'
import { View, Text } from 'react-native'
import { Component } from 'react';
import TopDiaMenuController from './TopDiaMenuController'
class TopDiaController extends Component{
    constructor(props){
        super(props)
    }

     render() {return (
        <View>
            <Text>{this.props.nombre}</Text>
            <TopDiaMenuController/>
            
        </View>
    )}
}
export default TopDiaController