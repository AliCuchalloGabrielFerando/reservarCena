import React, { useState } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'

import CarritoController from './CarritoController'
import PerfilController from './PerfilController'
import SemanaController from './SemanaController'
import TodayController from './TodayController'
import CrearComidaController from './CrearComidaController'

import Icon from 'react-native-vector-icons/AntDesign';

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Hoy':
      iconName = 'user';
      break;
    case 'Carrito':
      iconName = 'shoppingcart';
      break;
    case 'Semana':
      iconName = 'calendar';
      break;
    case 'Perfil':
      iconName = 'user';
      break;
    case 'Crear':
      iconName = 'user';
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} size={24} />;
};
const Tab = createBottomTabNavigator();

export default function TabController() {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <NavigationContainer>

      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screenOptions(route, color),
      })}>
        <Tab.Screen name="Hoy" component={TodayController}
        />
        {shouldShow ? (
        <Tab.Screen name="Carrito" component={CarritoController}
        />) :
        <Tab.Screen name="Crear" component={CrearComidaController}
        />}
        <Tab.Screen name="Semana" component={SemanaController} />


        <Tab.Screen name="Perfil" component={PerfilController}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}
