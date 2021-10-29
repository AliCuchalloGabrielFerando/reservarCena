import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import MenuItemView from './MenuItemView'
import tailwind from 'tailwind-rn'
 
export default class MenuView extends Component {
 
    render() {
        return (
            <ScrollView>
                <View>
                <MenuItemView></MenuItemView>
                <MenuItemView></MenuItemView>
                </View>
            </ScrollView>
        )
    }
}
