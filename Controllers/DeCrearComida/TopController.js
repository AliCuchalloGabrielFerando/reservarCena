import React from 'react'

import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';
import ComidaController from './ComidaController'
export default function TopsController() {
    return (

        <ScrollableTabView
            renderTabBar={() => <ScrollableTabBar /> }
        >

            <ComidaController  tabLabel='Plato' nombre="paltano" ></ComidaController>
            <ComidaController  tabLabel='Bebida' nombre="beebbe" ></ComidaController>


        </ScrollableTabView>
    )
}
