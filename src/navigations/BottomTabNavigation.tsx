import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Discover from '../features/discover';
import MyLibrary from '../features/my-library';
import List from '../features/list';

const Tab = createBottomTabNavigator();
function BottomTabNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="MyLibrary" component={MyLibrary} />
      <Tab.Screen name="List" component={List} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
