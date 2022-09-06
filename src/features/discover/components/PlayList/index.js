import {StyleSheet, Text, View} from 'react-native';
import Header from '../../../../components/header';
import {images} from '../../../../assets';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import PlayListOnline from '../PlayListOnline';
import PlayListOffline from '../PlayListOffLine';
import Upcoming from '../up-coming';
const Tab = createMaterialTopTabNavigator();

const PlayList = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Header title="PLAYLIST YÊU THÍCH" iconRight={images.icon_download} />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#FFF',
          },
          tabBarLabelStyle: {
            color: 'gray',
          },
        }}>
        <Tab.Screen name="PlayList Online" component={PlayListOnline} />
        <Tab.Screen name="PlayList Offline" component={PlayListOffline} />
        {/* <Tab.Screen name="Top Rated" component={TopRated} />
        <Tab.Screen name="Search" component={Search} /> */}
      </Tab.Navigator>
    </View>
  );
};

export default PlayList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  },
});
