


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
	createStackNavigator,
} from '@react-navigation/stack';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
    }}>
    <>
      <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
    </>
  </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})