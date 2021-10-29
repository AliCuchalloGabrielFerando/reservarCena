import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ComidaVista from '../../Views/Crear/ComidaVista'
export default class ComidaController extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
           
                <ComidaVista/>
        )
    }
}
