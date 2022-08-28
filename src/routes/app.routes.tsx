/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

import Home from '../pages/Home'

export function AppRoutes() {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveBackgroundColor: '#1a1a1a',
        tabBarInactiveBackgroundColor: '#1a1a1a',
        tabBarActiveTintColor: '#FBB034',
        tabBarInactiveTintColor: '#CCCCCC',
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Register Product"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="new-message" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
