import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigation from './BottomTabNavigation';
import MovieDetail from '../features/MovieDetail';
import Trailer from '../features/Trailer';
import ListDetail from '../features/list-detail';
import List from '../features/list';

const Stack = createStackNavigator();
const StackList = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <>
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
        />
        <Stack.Screen name="MovieDetail" component={MovieDetail} />
        <Stack.Screen name="Trailer" component={Trailer} />
      </>
    </Stack.Navigator>
  );
}

export const StackListNavigator = () => {
  return (
    <StackList.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StackList.Screen name="ListAll" component={List} />
      <StackList.Screen name="ListDetail" component={ListDetail} />
    </StackList.Navigator>
  );
};
