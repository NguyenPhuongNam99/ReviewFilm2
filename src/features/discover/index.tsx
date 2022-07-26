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
  setDataTopRated,
} from './discoverSlice';
import PopupVideo from '../popup-video';
import {images} from '../../assets';
import TopRated from './components/top-rated';

const Tab = createMaterialTopTabNavigator();
const Discover = ({navigation}: any) => {
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
        url: 'https://imdb-api.com/API/AdvancedSearch/k_ftyzt2lc?groups=oscar_winners',
      }).then(apiResponse => {
        // process the response
        const products = apiResponse.data;
        dispatch(setDataUpComingResponse(products.results));
      });

      await axios({
        method: 'get',
        url: 'https://imdb-api.com/en/API/MostPopularTVs/k_ftyzt2lc',
      }).then(apiResponse => {
        // process the response
        const products = apiResponse.data;
        dispatch(setDataTopRated(products.items));
      });
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
      <Header
        iconLeft={images.ic_drawer}
        lStyle={{tintColor: 'yellow'}}
        onLeftPress={() => navigation.openDrawer()}
      />
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
        <Tab.Screen name="Popular" component={Upcoming} />
        <Tab.Screen name="Top Rated" component={TopRated} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>

      {visiable && <PopupVideo />}
    </View>
  );
};

export default Discover;
