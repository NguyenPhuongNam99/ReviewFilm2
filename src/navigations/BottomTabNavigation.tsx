import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Discover from '../features/discover';
import MyLibrary from '../features/my-library';
import Search from '../features/discover/components/search';
import Icon from 'react-native-vector-icons/FontAwesome';
import PlayList from '../features/discover/components/PlayList';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {StackListNavigator} from './StackNavigator';
<<<<<<< Updated upstream
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StackChannelScreen} from './StackNavigator';
=======
import DrawerMenu from './DrawerNavigator';

>>>>>>> Stashed changes
const Tab = createBottomTabNavigator();
function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#5800FF',
        },
      }}>
      <Tab.Screen
        name="Trang chủ"
        component={Discover}
        options={{
          tabBarIcon: tabInfo => (
            <Icon
              name="home"
              size={20}
              color={tabInfo.focused ? '#FFF' : '#9A9A9A'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: tabInfo => (
            <IconMaterialIcons
              name="search"
              size={20}
              color={tabInfo.focused ? '#fff' : '#9A9A9A'}
            />
          ),
        }}
      />
      {/* <Tab.Screen
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
      /> */}

      <Tab.Screen
        name="PlayList"
        component={PlayList}
        options={{
          tabBarIcon: tabInfo => (
            <MaterialIcons
              name="queue-music"
              size={20}
              color={tabInfo.focused ? '#FFF' : '#9A9A9A'}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ChannelStack"
        component={StackChannelScreen}
        options={{
          tabBarIcon: tabInfo => (
            <MaterialCommunityIcons
              name="movie-roll"
              size={20}
              color={tabInfo.focused ? '#FF5F24' : '#9A9A9A'}
            />
          ),
          title: 'Channel',
        }}
      />
      <Tab.Screen
        name="Danh Mục"
        component={StackListNavigator}
        options={{
          tabBarIcon: tabInfo => (
            <Entypo
              name="folder-music"
              size={20}
              color={tabInfo.focused ? '#fff' : '#9A9A9A'}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="DrawerMenu"
        component={DrawerMenu}
        options={{
          tabBarIcon: tabInfo => (
            <IconMaterialIcons
              name="search"
              size={20}
              color={tabInfo.focused ? '#FF5F24' : '#9A9A9A'}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
