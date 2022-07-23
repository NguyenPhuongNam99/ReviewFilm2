import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import Header from '../../components/header';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Upcoming from './components/up-coming';
import Search from './components/search';
import NowPlaying from './components/now-playing';
import axios from 'axios';
import {useAppDispatch, useAppSelector} from '../../app/store';
import {setData, setDataUpComingResponse} from './discoverSlice';

const Tab = createMaterialTopTabNavigator();
const Discover = () => {
  const data = useAppSelector(state => state.counterSlice.data);
  const dispatch = useAppDispatch();
  const callApi = async () => {
    try {
      await axios({
        method: 'get',
        url: 'https://imdb-api.com/en/API/InTheaters/k_ftyzt2lc',
      }).then(apiResponse => {
        // process the response
        const products = apiResponse.data;
        dispatch(setData(products.items));
        console.log('product new', products.items);
      });

      await axios({
        method: 'get',
        url: 'https://imdb-api.com/en/API/ComingSoon/k_ftyzt2lc',
      }).then(apiResponse => {
        // process the response
        const products = apiResponse.data;
        dispatch(setDataUpComingResponse(products.items));
        console.log('video new', products.items);
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  React.useEffect(() => {
    callApi().then(res => console.log('ressssss', res));
  }, []);
  return (
    <View style={styles.container}>
      <Header />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: 'black',
          },
          tabBarLabelStyle: {
            color: 'white',
          },
          tabBarIndicatorStyle: {
            backgroundColor: 'yellow',
          },
        }}>
        <Tab.Screen name="Now Playing" component={NowPlaying} />
        <Tab.Screen name="Upcoming" component={Upcoming} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
    </View>
  );
};

export default Discover;
