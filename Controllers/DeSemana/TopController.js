import React from 'react'

import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { NavigationContainer } from '@react-navigation/native'
import TopDiaController from './TopDiaController'


export default function TopController() {
  return (

    <ScrollableTabView
      renderTabBar={() => <ScrollableTabBar />}
    >

      <TopDiaController tabLabel='perfil' nombre="dfafa" />
      <TopDiaController tabLabel='carrito' nombre="mundo" />
      <TopDiaController tabLabel='carrito' nombre="mundial" />
      <TopDiaController tabLabel='carritodf' nombre="hogsgla" />

    </ScrollableTabView>
  )
}
