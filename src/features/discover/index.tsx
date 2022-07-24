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
import {
  setData,
  setDataUpComingResponse,
  setLoadingData,
} from './discoverSlice';
import PopupVideo from '../popup-video';

const Tab = createMaterialTopTabNavigator();
const Discover = () => {
  const data = useAppSelector(state => state.counterSlice.data);
  const dispatch = useAppDispatch();
  // const visiable = useAppSelector(state => state.popupVideoSlice.visiable);

  const visiable = useAppSelector(state => state.popupVideoSlice.visiable);

  const callApi = async () => {
    try {
      //call api Now Playing
      dispatch(setLoadingData(true));
      await axios({
        method: 'get',
        url: 'https://imdb-api.com/en/API/InTheaters/k_ftyzt2lc',
      })
        .then(apiResponse => {
          // process the response
          const products = apiResponse.data;
          dispatch(setData(products.items));
          dispatch(setLoadingData(false));
        })
        .catch(error => {
          dispatch(setLoadingData(false));
          console.log('error', error);
        });

      //call api Up Playing
      await axios({
        method: 'get',
        url: 'https://imdb-api.com/en/API/ComingSoon/k_ftyzt2lc',
      }).then(apiResponse => {
        // process the response
        const products = apiResponse.data;
        dispatch(setDataUpComingResponse(products.items));
      });

      //call api Search
    } catch (error) {
      console.log('error', error);
    }
  };

  React.useEffect(() => {
    callApi();
    // getDataUsingSimpleGetCall();
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

      {visiable && <PopupVideo />}
    </View>
  );
};

export default Discover;
