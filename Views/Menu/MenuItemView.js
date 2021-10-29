import React, { Component, useState } from 'react'
import { Text, View, Image, Button } from 'react-native'
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import tailwind from 'tailwind-rn';

export default class MenuItemView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            visible: false
        };
    }
    hideMenu = () => { this.setState({ visible: false }) }

    showMenu = () => { this.setState({ visible: true }) }
    render() {
        return (
            <View style={tailwind('p-2')}>

                <View style={tailwind('p-4 border-2 border-black w-full flex flex-row')}>
                    <View>

                        <Image
                            style={{ width: 100, height: 100 }}
                            source={{ uri: "https://reactjs.org/logo-og.png" }}
                            onPress={this.showMenu}
                        />
                    </View >
                    <View style={tailwind('pl-4')}>
                        <Menu
                            visible={this.state.visible}
                            anchor={
                                <View>
                                    <Text onPress={this.showMenu} style={tailwind('text-yellow-200 w-full pb-4')}> Pollo a la parrilla </Text>
                                    <Text onPress={this.showMenu} style={tailwind('text-yellow-200 w-full')}> Pollo a la parrilla </Text>
                                    <Text onPress={this.showMenu} style={tailwind('text-yellow-200 w-full')}> {this.state.count} </Text>
                                </View>
                            }
                            onRequestClose={this.hideMenu}
                        >
                            <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
                            <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
                            <MenuItem disabled>Disabled item</MenuItem>
                            <MenuDivider />
                            <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
                        </Menu>

                        <Button onPress={() => this.setState({ count: this.state.count + 1 })} title="tocas">

                        </Button>
                    </View>
                </View>

            </View>
        )
    }
}
