import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigation from './BottomTabNavigation';
import MovieDetail from '../features/MovieDetail';
import Trailer from '../features/Trailer';
import ListDetail from '../features/list-detail';
import List from '../features/list';
import Policy from '../features/Policy';
import Term from '../features/Term';
import AboutUs from '../features/AboutUs';
import RateApp from '../features/RateApp';
import Share from '../features/Share';
import Report from '../features/Report';
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
        <StackList.Screen name="Policy" component={Policy} />
        <StackList.Screen name="Term" component={Term} />
        <StackList.Screen name='AboutUs' component={AboutUs}/>
        <StackList.Screen name='RateApp' component={RateApp}/>
        <StackList.Screen name='Share' component={Share}/>
        <StackList.Screen name='Report' component={Report}/>
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
