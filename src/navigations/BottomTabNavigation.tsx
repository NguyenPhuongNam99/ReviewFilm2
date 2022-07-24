import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Discover from '../features/discover';
import MyLibrary from '../features/my-library';
import Icon from 'react-native-vector-icons/Fontisto';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StackListNavigator} from './StackNavigator';

const Tab = createBottomTabNavigator();
function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: tabInfo => (
            <Icon
              name="fire"
              size={20}
              color={tabInfo.focused ? '#FF5F24' : '#9A9A9A'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyLibrary"
        component={MyLibrary}
        options={{
          tabBarIcon: tabInfo => (
            <Ionicons
              name="ios-heart"
              size={22}
              color={tabInfo.focused ? '#FF5F24' : '#9A9A9A'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={StackListNavigator}
        options={{
          tabBarIcon: tabInfo => (
            <IconMaterialIcons
              name="video-library"
              size={20}
              color={tabInfo.focused ? '#FF5F24' : '#9A9A9A'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
