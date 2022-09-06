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

import ChannelScreen from '../features/ChannelScreen';
import ChannelDetail from '../features/channel-detail';
import Casting from '../features/casting';


import AboutUs from '../features/AboutUs';
import RateApp from '../features/RateApp';
import Share from '../features/Share';
import Report from '../features/Report';

const Stack = createStackNavigator();
const StackList = createStackNavigator();
const StackChannel = createStackNavigator();

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
<<<<<<< Updated upstream

        <StackList.Screen name="Casting" component={Casting} />

        <StackList.Screen name='AboutUs' component={AboutUs}/>
        <StackList.Screen name='RateApp' component={RateApp}/>
        <StackList.Screen name='Share' component={Share}/>
        <StackList.Screen name='Report' component={Report}/>

=======
        <StackList.Screen name="AboutUs" component={AboutUs} />
        <StackList.Screen name="RateApp" component={RateApp} />
        <StackList.Screen name="Share" component={Share} />
        <StackList.Screen name="Report" component={Report} />
>>>>>>> Stashed changes
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

export const StackChannelScreen = () => {
  return (
    <StackChannel.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StackChannel.Screen name="ChannelScreen" component={ChannelScreen} />
      <StackChannel.Screen name="ChannelDetail" component={ChannelDetail} />
    </StackChannel.Navigator>
  );
};
