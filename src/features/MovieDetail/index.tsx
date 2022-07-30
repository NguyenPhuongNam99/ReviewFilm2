import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../components/header';
import {images} from '../../assets';
import {SaveMovie} from './MovieSlice';
import {useAppDispatch, useAppSelector} from '../../app/store';
import axios from 'axios';

const {width, height} = Dimensions.get('window');

const MovieDetail = (props: any) => {
  const {item} = props.route.params;
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.MovieSlice.data);
  const check = data.some(movie => movie.id === item.id);
  const [detail, setdetail] = useState(null);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    setloading(true);
    const res = await axios.get(
      `https://imdb-api.com/en/API/Title/k_ftyzt2lc/${item.id?.replace('showtimes','')}/Trailer`,
    );
    setdetail(res.data);
    setloading(false);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <Header
          title={item?.title}
          iconLeft={images.ic_back}
          onLeftPress={() => props.navigation.goBack()}
          lStyle={styles.icLeft}
        />
        {loading ? (
          <View
            style={{
              flex: 1,
              backgroundColor: 'black',
              justifyContent: 'center',
            }}>
            <ActivityIndicator size={'large'} color={'yellow'} />
          </View>
        ) : (
          <ScrollView style={{flex: 1}}>
            <Image source={{uri: detail?.image}} style={styles.thumnail} />
            <View style={{marginHorizontal: 16, marginBottom: 20}}>
              <Text style={styles.title}>{item?.title}</Text>
              <Text style={styles.time}>
                {item?.releaseState || detail?.releaseState}
              </Text>

              <Text style={{color: 'white', marginBottom: 20}}>
                {detail?.genres}
              </Text>

              <Text style={styles.Overview}>Overview</Text>
              <Text style={styles.plot}>{detail?.plot}</Text>

              <View style={styles.rowBetween}>
                <Text style={styles.runtime}>Runtime</Text>
                <Text style={styles.runtime}>{detail?.runtimeStr}</Text>
              </View>

              <View style={styles.rowBetween}>
                <Text style={styles.runtime}>Directors</Text>
                <Text style={styles.runtime}>{detail?.directors}</Text>
              </View>

              <View style={styles.rowBetween}>
                <Text style={styles.runtime}>Writer</Text>
                <Text style={styles.runtime}>{detail?.writers}</Text>
              </View>

              <Text style={{color: 'white'}}>Stars: {detail?.stars}</Text>
            </View>
          </ScrollView>
        )}

        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.first}
            onPress={() => props.navigation.navigate('Trailer', {id: item.id})}>
            <Image source={images.ic_playtrailer} style={styles.iconPlay} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.center}
            onPress={() => {
              dispatch(SaveMovie(item));
            }}>
            <Image
              source={check ? images.ic_tick : images.ic_plus}
              style={styles.iconPlay}
            />
          </TouchableOpacity>
          <View style={styles.viewEmpty}></View>
          <TouchableOpacity
            style={styles.casting}
            onPress={() => props.navigation.navigate('Casting' as never)}>
            <Text>Casting</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  icLeft: {
    tintColor: 'rgb(218,184,25)',
  },
  thumnail: {
    width: width,
    height: height,
  },
  iconPlay: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  bottom: {
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 9,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
  time: {
    color: 'white',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'white',
    paddingBottom: 10,
  },
  Overview: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  plot: {
    color: 'white',
    lineHeight: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: 'white',
    marginBottom: 10,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  runtime: {
    color: 'gray',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  viewEmpty: {width: '30%', height: 30},
  center: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  first: {width: '30%'},
  casting: {
    width: '23%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    borderRadius: 17,
    backgroundColor: 'white',
    position: 'absolute',
    right: 12,
    top: 10,
  },
});

export default MovieDetail;
