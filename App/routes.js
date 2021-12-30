import React from 'react';
import { StatusBar } from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Explorar from './src/pages/Explorar';
import Inscricao from './src/pages/Inscricao';
import Notificacao from './src/pages/Notificacao';
import Biblioteca from './src/pages/Biblioteca';
import Detalhes from './src/pages/Detalhes';

// Hooks
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      activeColor={'#ff0000'}
      shifting={false}
      barStyle={{
        backgroundColor: "#fff",
        height: 50
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color }) =>
            <Icon name="home" color={color} size={26} />
        }}
      />

      <Tab.Screen
        name="Explorar"
        component={Explorar}
        options={{
          tabBarLabel: 'Explorar',
          tabBarIcon: ({ color }) =>
            <Icon name="compass" color={color} size={26} />
        }}
      />
      <Tab.Screen
        name="Inscricao"
        component={Inscricao}
        options={{
          tabBarLabel: 'Inscriçoes',
          tabBarIcon: ({ color }) =>
            <Icon name="youtube-subscription" color={color} size={26} />
        }}
      />
      <Tab.Screen
        name="Notificacao"
        component={Notificacao}
        options={{
          tabBarLabel: 'Notificações',
          tabBarIcon: ({ color }) =>
            <Icon name="bell" color={color} size={26} />
        }}
      />
      <Tab.Screen
        name="Biblioteca"
        component={Biblioteca}
        options={{
          tabBarLabel: 'Biblioteca',
          tabBarIcon: ({ color }) =>
            <Icon name="play-box-multiple" color={color} size={26} />
        }}
      />
    </Tab.Navigator >
  )
}

const Routes = () => {

  return (
    <NavigationContainer>

      <StatusBar
        backgroundColor="#32353d"
        barStyle="light-content"
        hidden={false}
      />

      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login" component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home" component={HomeTabs}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Explorar" component={Explorar}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Inscricao" component={Inscricao}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Notificacao" component={Notificacao}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Biblioteca" component={Biblioteca}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Detalhes" component={Detalhes}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;