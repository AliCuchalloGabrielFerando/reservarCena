import React, { Component } from 'react'
import { Text, View } from 'react-native'
import tailwind from 'tailwind-rn'
import MenuView from '../../Views/Menu/MenuView'

export default class MenuController extends Component {
    render() {
        return (
            <View style={tailwind('items-center')}>
                <MenuView></MenuView>
                <MenuView></MenuView>
            </View>
        )
    }
}
