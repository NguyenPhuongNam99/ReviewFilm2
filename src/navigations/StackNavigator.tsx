


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
	createStackNavigator,
} from '@react-navigation/stack';
import BottomTabNavigation from './BottomTabNavigation';
import MovieDetail from '../features/MovieDetail';
import Trailer from '../features/Trailer';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
    }}>
    <>
      <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
      <Stack.Screen name="Trailer" component={Trailer} />
    </>
  </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})